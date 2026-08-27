import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CareerChatbot from "./components/CareerChatbot";

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders chatbot markdown as formatted content", async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      answer:
        "**Personal Projects**\n\n**Playwright E-Commerce Test Automation Framework**\n\nTechnologies:\n- Playwright\n- JavaScript\n\nKey Highlights:\n- Automated 45+ end-to-end e-commerce test cases.",
    }),
  });

  render(<CareerChatbot />);

  fireEvent.click(screen.getByLabelText("Open AI Career Assistant"));
  fireEvent.change(screen.getByPlaceholderText("Ask about Nazim..."), {
    target: { value: "What are Nazim's personal projects?" },
  });
  fireEvent.click(screen.getByLabelText("Send message"));

  await waitFor(() => {
    expect(screen.getByText("Personal Projects")).toBeInTheDocument();
  });

  expect(screen.getByText("Playwright")).toBeInTheDocument();
  expect(screen.getByText("JavaScript")).toBeInTheDocument();
  expect(screen.getByText("Personal Projects").tagName).toBe("STRONG");
  expect(screen.queryByText(/\*\*Personal Projects\*\*/)).not.toBeInTheDocument();
});

test("renders markdown tables as responsive tables", async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      answer:
        "| Requirement | Nazim's Experience | Alignment |\n| --- | --- | --- |\n| Selenium | Selenium WebDriver with Java | Strong |",
    }),
  });

  render(<CareerChatbot />);

  fireEvent.click(screen.getByLabelText("Open AI Career Assistant"));
  fireEvent.change(screen.getByPlaceholderText("Ask about Nazim..."), {
    target: { value: "How does Nazim match this role?" },
  });
  fireEvent.click(screen.getByLabelText("Send message"));

  const table = await screen.findByRole("table");

  expect(table.parentElement).toHaveClass("career-chatbot-table-wrapper");
  expect(screen.getByText("Requirement")).toBeInTheDocument();
  expect(screen.queryByText(/\| Requirement \|/)).not.toBeInTheDocument();
});
