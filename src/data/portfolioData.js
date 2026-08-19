export const profile = {
  name: "Mohd Nazim Rasalat",
  shortName: "Nazim",
  title: "SDET | QA Automation Engineer",
  experience: "2+ Years",
  location: "Noida, Uttar Pradesh, India",
  email: "nazim57262@gmail.com",
  github: "https://github.com/nazim2125",
  linkedin: "https://www.linkedin.com/in/nazim21/",
  summary:
    "QA Engineer with 2+ years of experience in Manual and Automation Testing, specializing in UI automation, API testing, database validation, and end-to-end testing for enterprise applications.",
  stack: 
  ["Selenium","Playwright","Java","TypeScript","TestNG","REST Assured","Postman","SQL",]
};

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "300+", label: "UI, API & DB Test Cases" },
  { value: "3", label: "Production Domains" },
  { value: "3", label: "Major QA Projects" },
];

export const skillGroups = [
  {
    title: "Automation Frameworks",
    description: "Building maintainable UI automation frameworks for reliable functional and regression testing.",
    items: ["Selenium WebDriver", "Playwright", "Appium", "TestNG", "Cucumber BDD", "Page Object Model"],
  },
  {
    title: "Programming",
    description: "Languages used for test automation, scripting, validation, and test data handling.",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "API Testing",
    description: "Automating and validating REST APIs across functional, negative, CRUD, and schema-based scenarios.",
    items: ["REST Assured", "Postman", "API Automation", "JSON Schema Validation"],
  },
  {
    title: "Database Testing",
    description: "Validating backend data and ensuring consistency between UI, API responses, and database records.",
    items: ["SQL", "Database Validation", "Backend Data Verification"],
  },
  {
    title: "CI/CD & DevOps",
    description: "Integrating automated tests into CI/CD pipelines for continuous regression and faster feedback.",
    items: ["Jenkins", "GitHub Actions", "Docker", "Maven", "Git", "GitHub"],
  },
  {
    title: "Testing",
    description: "Manual and automated testing across functional, regression, release, and performance workflows.",
    items: ["Functional", "Regression", "Smoke", "Sanity", "End-to-End", "Cross-Browser", "API", "Database", "Performance", "Load", "Stress"],
  },
  {
    title: "Tools",
    description: "Tools used for defect tracking, test management, and performance testing.",
    items: ["Jira", "TestRail", "JMeter"],
  },
];

export const experience = {
  company: "Clikon Technologies Pvt Ltd",
  role: "QA Automation Engineer",
  location: "Noida",
  duration: "June 2024 - Present",
  highlights: [
    "Designed, executed and automated 300+ UI, API and database test cases.",
    "Developed and maintained Selenium WebDriver and Playwright automation frameworks.",
    "Used Java, TypeScript, TestNG and Page Object Model.",
    "Performed Manual, Functional, Regression, Smoke, API, Database and Cross-Browser Testing.",
    "Validated REST APIs using REST Assured and Postman.",
    "Verified backend data using SQL.",
    "Configured GitHub Actions for Playwright automation.",
    "Used Jenkins for scheduled Selenium regression runs.",
    "Collaborated with developers, business analysts and product owners.",
    "Participated in sprint planning, defect triage and release validation.",
    "Used AI-assisted tools for test ideas, edge cases, test data and failure-log analysis.",
  ],
  metrics: ["300+ test cases", "3 domains", "UI + API + DB coverage"],
  tools: ["Selenium", "Playwright", "Java", "TypeScript", "TestNG", "Page Object Model(POM)","REST Assured", "Postman", "SQL", "Jenkins", "GitHub Actions", "Jira"],
};

export const projects = [
  {
    name: "E-Retail Inventory Management System",
    role: "QA Automation Engineer",
    domain: "E-Commerce / Inventory Management",
    stack: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Page Object Model", "Cucumber BDD", "Postman", "SQL", "Jira", "Jenkins"],
    modules: ["Inventory", "Orders", "Users", "Shipment"],
    approach: "UI automation, API validation, SQL-backed data verification, smoke, regression, functional, and cross-browser testing.",
    achievements: [
      "Automated 90+ Selenium WebDriver test cases.",
      "Covered Inventory, Orders, User Management and Shipment modules.",
      "Built and maintained Page Object Model framework.",
      "Validated inventory and order APIs using Postman.",
      "Verified backend data using SQL.",
      "Tested Chrome, Firefox and Edge.",
      "Configured Jenkins for automated test execution after deployments.",
    ],
  },
  {
    name: "Find Us Here - IT Help Desk Portal",
    role: "QA Automation Engineer",
    domain: "IT Service Management",
    stack: ["Selenium WebDriver", "Java", "TestNG", "Maven", "POM", "Cucumber BDD", "REST Assured", "JMeter", "Jira", "Jenkins"],
    modules: ["Tickets", "CRUD APIs", "Validation", "Load Tests"],
    approach: "Hybrid Selenium framework, API automation, data-driven tests, and JMeter-based load and stress testing.",
    achievements: [
      "Built a Hybrid Selenium framework using Data-Driven Testing and POM.",
      "Parameterized test data using Apache POI and Excel datasets.",
      "Automated 70+ REST Assured API scenarios.",
      "Covered CRUD, validation and negative test cases.",
      "Performed Load and Stress testing using JMeter.",
      "Identified response-time bottlenecks under concurrent load.",
      "Maintained Maven dependencies.",
      "Automated regression execution through Jenkins CI/CD.",
    ],
  },
  {
    name: "StaffDNA - Healthcare Recruitment Platform",
    role: "QA Automation Engineer",
    domain: "Healthcare Recruitment",
    stack: ["Playwright", "TypeScript", "Page Object Model", "Cucumber BDD", "Postman", "SQL", "Jira", "GitHub Actions"],
    modules: ["Recruitment Workflows", "Playwright Tests" ,"API Validation" ,"Test Reports"],
    approach: "Playwright UI automation, API checks, SQL validation, cross-browser testing, and GitHub Actions execution.",
    achievements: [
      "Automated 90+ Playwright test cases using TypeScript.",
      "Covered healthcare recruitment workflows.",
      "Structured automation using Page Object Model.",
      "Executed Smoke, Regression, Sanity and Functional Testing.",
      "Performed API and Cross-Browser testing.",
      "Validated REST APIs using Postman.",
      "Verified backend data using SQL.",
      "Configured GitHub Actions to execute Playwright suites on every push.",
    ],
  },
];
export const personalProjects = [
  {
    domain: "Web Test Automation",

    name: "Playwright E-Commerce Test Automation Framework",

    role: "Personal QA Automation Project",

    modules: [
      "Authentication",
      "Products",
      "Cart",
      "Checkout",
      "Account",
      "Cross-Browser",
    ],

    approach:
      "End-to-end Playwright automation framework covering critical e-commerce workflows with Page Object Model, cross-browser execution, parallel testing, and CI-ready reporting.",

    achievements: [
      "Automated 45+ end-to-end test cases across multiple e-commerce workflows.",
      "Implemented Page Object Model with 6+ reusable page objects for maintainable test automation.",
      "Covered login, products, cart, checkout, account, and complete purchase workflows.",
      "Implemented Smoke, Regression, Sanity, and End-to-End test coverage.",
      "Configured cross-browser execution across Chromium, Firefox, WebKit, Mobile Chrome, and Mobile Safari.",
      "Enabled parallel test execution to reduce feedback time.",
      "Configured HTML reporting with screenshots and videos captured on failures.",
      "Prepared GitHub Actions workflow for automated test execution and test-result artifacts.",
    ],

    stack: [
      "Playwright",
      "JavaScript",
      "Node.js",
      "Page Object Model",
      "Cross-Browser Testing",
      "Parallel Testing",
      "HTML Reports",
      "GitHub Actions",
      "Git",
    ],

    github:
      "https://github.com/nazim2125/playwrightEcommerceTests",
  },
  {
    domain: "Mobile Test Automation",

    name: "Appium Mobile Automation Framework",

    role: "Personal QA Automation Project",

    modules: [
      "App Launch",
      "Login",
      "Navigation",
      "Product Catalog",
      "Checkout",
      "Purchase Flow",
    ],

    approach:
      "Java and Appium 2 mobile automation framework for Android testing, built with Page Object Model, TestNG, data-driven testing, reporting, and CI execution.",

    achievements: [
      "Built a maintainable mobile automation framework using Appium 2, Java, and TestNG.",
      "Implemented Page Object Model with one page object per application screen.",
      "Created thread-safe driver management using ThreadLocal for Appium sessions.",
      "Automated smoke, regression, and end-to-end mobile test scenarios.",
      "Implemented 11 data-driven negative login scenarios using TestNG DataProvider.",
      "Automated the complete purchase flow from login and product selection through checkout, order confirmation, and logout.",
      "Integrated ExtentReports with automatic failure screenshots and Log4j2 execution logs.",
      "Configured GitHub Actions to boot an Android emulator, start Appium, execute smoke tests, and upload test artifacts.",
    ],

    stack: [
      "Appium 2",
      "Java",
      "TestNG",
      "UiAutomator2",
      "Maven",
      "Page Object Model",
      "Android",
      "GitHub Actions",
      "ExtentReports",
      "Log4j2",
    ],

    github:
      "https://github.com/nazim2125/appium-mobile-automation",
  },
];

export const testingExpertise = [
  {
    title: "UI Automation",
    text: "Design browser automation around stable locators, Page Object Model structure, reusable flows, and cross-browser coverage.",
  },
  {
    title: "API Testing",
    text: "Validate REST APIs using REST Assured and Postman, including positive, negative, CRUD, validation and backend data scenarios.",
  },
  {
    title: "Database Testing",
    text: "Verify application data using SQL queries and validate consistency between UI, API and database layers.",
  },
  {
    title: "Functional Testing",
    text: "Validate business workflows against requirements before release-critical automation is expanded.",
  },
  {
    title: "Regression Testing",
    text: "Run repeatable checks through Selenium, Playwright, Jenkins, and GitHub Actions to protect existing behavior.",
  },
  {
    title: "Cross-Browser Testing",
    text: "Check workflows across Chrome, Firefox, and Edge so UI behavior stays consistent for users.",
  },
  {
    title: "Performance Testing",
    text: "Use JMeter for load and stress testing, especially around ticket-submission endpoints and response-time bottlenecks.",
  },
  {
    title: "CI/CD Testing",
    text: "Integrate automation into GitHub Actions and Jenkins for continuous validation and faster release feedback.",
  },
  {
    title: "End-to-End Testing",
    text: "Cover complete user journeys by combining UI checks, API validation, and database verification.",
  },
];

export const workflowSteps = [
  "Requirement",
  "Test Planning",
  "Test Case Design",
  "UI Automation",
  "API Testing",
  "Database Validation",
  "Cross-Browser Testing",
  "CI/CD Execution",
  "Defect Triage",
  "Release Validation",
];

export const principles = [
  ["01", "Automate Repetitive Work", "Move repeatable regression checks into reliable automation so manual testing focuses on judgment-heavy work."],
  ["02", "Test at Multiple Layers", "Validate UI behavior, APIs, and database state instead of relying on a single testing layer."],
  ["03", "Catch Defects Early", "Run smoke and automated checks close to code changes through CI/CD feedback loops."],
  ["04", "Keep Frameworks Maintainable", "Use Page Object Model, clear fixtures, and readable test data to keep suites easier to evolve."],
  ["05", "Validate Real User Workflows", "Prioritize the paths that matter to users and release confidence, not isolated happy-path checks only."],
  ["06", "Make Quality Part of CI/CD", "Treat automation results, logs, and reports as part of the delivery pipeline."],
];