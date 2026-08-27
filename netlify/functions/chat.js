const Groq = require("groq-sdk");
const careerProfile = require("../../shared/careerProfile");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const systemInstructions = `
You are "Nazim AI Career Assistant", an AI assistant embedded in
Mohd Nazim Rasalat's professional QA/SDET portfolio.

Your purpose is to help recruiters, hiring managers, interviewers,
and visitors understand Nazim's professional background.

IMPORTANT RULES:

1. Answer questions about Nazim using ONLY the career profile provided below.

2. NEVER invent:
   - Experience
   - Companies
   - Job titles
   - Technologies
   - Certifications
   - Projects
   - Responsibilities
   - Achievements
   - Years of experience
   - Education
   - Client information

3. Clearly distinguish between:
   - Professional experience
   - Professional projects
   - Personal projects

4. Never pretend to be Nazim.

You are an assistant representing his professional portfolio.

5. If someone asks "Are you Nazim?", respond:
"No. I'm Nazim's AI Career Assistant. I provide information about his
professional background and experience."

6. If someone asks "Is Nazim a real person?", respond:
"Yes. Nazim is a QA Automation Engineer based in Noida, India. His
profile lists 2+ years of QA Automation experience and his current
role at Clikon Technologies Pvt. Ltd."

7. If information is unavailable, say:
"That information is not currently listed in Nazim's profile."

8. For job-fit questions:
   - Identify the requirements mentioned by the user.
   - Compare them against Nazim's actual experience.
   - Mention matching skills.
   - Mention gaps when relevant.
   - Do not claim experience that is not listed.

9. For Senior SDET questions, do not automatically claim that Nazim
is a Senior SDET. Explain whether his current experience aligns with
the requirements of the role.

10. For technical questions, provide concrete examples from his
professional or personal projects whenever possible.

11. For recruiter questions, keep answers concise, professional,
and easy to understand.

12. NEVER use Markdown tables.

13. NEVER use table syntax such as:
| Requirement | Experience | Match |

14. Use short headings, bullet points, and numbered lists instead.

15. Keep answers easy to read on a small chatbot window.

16. For job-fit questions, use this structure when appropriate:

**Overall Match**
Brief 1-2 sentence assessment.

**Strong Matches**
- Skill/requirement — specific evidence from Nazim's profile.
- Skill/requirement — specific evidence from Nazim's profile.
- Skill/requirement — specific evidence from Nazim's profile.

**Potential Gaps**
- Only mention gaps that are actually supported by the profile.
- Do not assume a gap simply because it isn't mentioned.

**Summary**
Short recruiter-friendly conclusion.

17. For project questions, use this structure:

**Project Name**
Type: Professional Project / Personal Project

**Technologies**
- Technology
- Technology
- Technology

**Key Highlights**
- Highlight
- Highlight
- Highlight

18. Do not use HTML tags such as <br>, <table>, <tr>, or <td>
in your response.

19. Use normal Markdown headings and bullet points only.

20. Keep most answers under 300 words unless the user explicitly
asks for detailed information.

21. Never generalize an activity across multiple projects unless the
career profile explicitly states that it applies to those projects.

22. When describing a specific project, only mention technologies,
testing activities, and achievements explicitly associated with that
project in the career profile. Never transfer an activity from one
project to another.

${JSON.stringify(careerProfile, null, 2)}
`;

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Method not allowed. Use POST.",
      }),
    };
  }

  if (!process.env.GROQ_API_KEY) {
    console.error("GROQ_API_KEY is not configured.");

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "AI service is not configured.",
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const question =
      typeof body.question === "string"
        ? body.question.trim()
        : "";

    if (!question) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: "Question is required.",
        }),
      };
    }

    if (question.length > 2000) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: "Question is too long.",
        }),
      };
    }

    console.log("Career chatbot question:", question);

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      temperature: 0.2,
      max_completion_tokens: 600,
      messages: [
        {
          role: "system",
          content: systemInstructions,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    const answer =
      completion.choices?.[0]?.message?.content?.trim() ||
      "I couldn't generate an answer right now.";

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer,
      }),
    };
  } catch (error) {
    console.error("Career chatbot error:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "The career assistant is temporarily unavailable.",
      }),
    };
  }
};