export const profile = {
  name: "Mohd Nazim Rasalat",
  shortName: "Nazim",
  title: "SDET / QA Automation Engineer",
  location: "Noida, Uttar Pradesh, India",
  email: "nazim57262@gmail.com",
  phone: "+91 80770 87914",
  github: "https://github.com/nazim2125",
  linkedin: "https://www.linkedin.com/in/nazim21/",
  summary: "I explore how enterprise software behaves in real user workflows and automate the checks teams need to run before each release.",
};

export const stats = [
  { value: "2+", label: "Years in QA" },
  { value: "300+", label: "Test cases across UI, API, and database" },
];

export const skillGroups = [
  {
    title: "Web and mobile automation",
    items: ["Selenium WebDriver", "Playwright", "Appium", "Java", "TypeScript", "JavaScript", "TestNG", "Cucumber", "Page Object Model"],
  },
  {
    title: "API, data, and performance",
    items: ["REST Assured", "Postman", "SQL", "JSON Schema", "JMeter"],
  },
  {
    title: "Test design and defect tracking",
    items: ["Exploratory testing", "Regression testing", "Cross-browser testing", "Jira", "TestRail"],
  },
  {
    title: "Build and CI/CD",
    items: ["GitHub Actions", "Jenkins", "Maven", "Docker", "Git"],
  },
];

export const experience = [
  {
    company: "RNFI Services Limited",
    role: "QA Automation Engineer",
    duration: "September 2026 to present",
    highlights: [
      "Build Playwright and TypeScript regression tests using page objects, reusable fixtures, and controlled test data.",
      "Test role-based permissions, direct URL restrictions, and form validation across the CSP Portal.",
      "Use Postman to verify API behavior and check that onboarding and approval updates appear correctly in FieldX.",
    ],
  },
  {
    company: "Clikon Technologies Pvt. Ltd.",
    role: "QA Automation Engineer",
    location: "Noida",
    duration: "Started June 2024",
    highlights: [
      "Translated business requirements into functional and regression tests and ran manual checks on critical workflows before release.",
      "Maintained reusable Selenium and Playwright suites and ran them through Jenkins and GitHub Actions.",
      "Worked with developers, business analysts, and product owners on sprint planning and release validation. Reproduced defects, tracked them in Jira, and verified fixes.",
    ],
  },
];

export const projects = [
  {
    name: "RNFI CSP Portal and FieldX Mobile Application",
    domain: "FinTech and banking",
    highlight: "Test bank-agent onboarding across the web portal and FieldX, from service-point assignment to document approval.",
    details: [
      "Verify branch and area mapping, agent replacement requests, and lead progression through onboarding stages.",
      "Check that role permissions control sidebar visibility and block restricted pages.",
      "Compare REST API responses with portal and mobile data to verify that workflow updates stay in sync.",
    ],
  },
  {
    name: "E-Retail Inventory Management System",
    domain: "E-retail",
    highlight: "Automated 90+ Selenium tests for inventory, orders, user management, and shipping.",
    details: [
      "Built reusable page objects and ran browser checks in Chrome, Firefox, and Edge.",
      "Checked inventory and order APIs with Postman and verified the resulting records with SQL.",
      "Configured Jenkins to run the suite after deployments.",
    ],
  },
  {
    name: "Find Us Here IT Help Desk Portal",
    domain: "IT service management",
    highlight: "Automated 70+ REST Assured scenarios for ticket APIs, including CRUD and negative cases.",
    details: [
      "Built a hybrid Selenium framework using page objects and Excel test data read through Apache POI.",
      "Verified ticket records with SQL and ran regression suites in Jenkins.",
    ],
  },
  {
    name: "StaffDNA Healthcare Recruitment Platform",
    domain: "Healthcare recruitment",
    highlight: "Automated 90+ recruitment workflow tests with Playwright and TypeScript.",
    details: [
      "Validated API responses with Postman and checked the underlying records with SQL.",
      "Used JMeter to identify response time bottlenecks under concurrent load.",
      "Configured GitHub Actions to run the Playwright suite on every push.",
    ],
  },
];

export const personalProjects = [
  {
    name: "Playwright E-Commerce Test Automation Framework",
    domain: "Web automation",
    highlight: "Automated 45+ end-to-end tests for sign-in, cart, checkout, and account workflows.",
    details: [
      "Built six or more reusable page objects in JavaScript and ran tests in parallel.",
      "Tested desktop and mobile browser profiles using Chromium, Firefox, and WebKit.",
      "Configured HTML reports with screenshots and videos on failure and prepared a GitHub Actions workflow to publish test artifacts.",
    ],
    github: "https://github.com/nazim2125/playwrightEcommerceTests",
  },
  {
    name: "Appium Mobile Automation Framework",
    domain: "Android automation",
    highlight: "Automated an Android purchase flow and 11 data-driven negative sign-in scenarios.",
    details: [
      "Built the framework with Appium 2, Java, and TestNG, using one page object per screen and thread-local driver sessions.",
      "Configured GitHub Actions to boot an Android emulator, run smoke tests, and upload artifacts.",
      "Captured failure screenshots with ExtentReports and execution logs with Log4j2.",
    ],
    github: "https://github.com/nazim2125/appium-mobile-automation",
  },
];
