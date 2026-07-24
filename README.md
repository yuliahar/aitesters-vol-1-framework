# AI_Testers — Vol. 1 Framework

> ©jaktestowac.pl Testoneo SP z o. o. 2026
> ⚠️ Only for users of [AI_Testers](https://aitesters.pl/)

A Playwright + TypeScript test-automation framework built step by step during the **AI_Testers** program. The repository doubles as:

- **A working framework** at the root — page objects, smoke and functional tests, CI, and coding standards you can run today.
- **A lesson archive** under [`lessons/`](lessons/) — each lesson captured as a self-contained project so you can follow the framework's evolution day by day.

The system under test is **Rolnopol**, an agricultural management demo app served locally at `http://localhost:3000`.

---

## 📑 Table of Contents

- [Getting Started](#-getting-started)
- [Running Tests](#-running-tests)
- [Project Structure](#-project-structure)
- [Working with the Lessons](#-working-with-the-lessons)
- [Conventions](#-conventions)
- [Contact & Support](#-contact--support)
- [Learning Resources](#-learning-resources)
- [Copilot Prompts History](#-copilot-prompts-history)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- The **Rolnopol** application running locally on `http://localhost:3000` (provided with the course)

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## 🧪 Running Tests

```bash
# Run the whole suite (headless)
npm test

# Run in headed mode
npx playwright test --headed

# Run a single spec file
npx playwright test tests/main.spec.ts

# Filter by tag (e.g. only smoke tests)
npx playwright test --grep @smoke

# Open the HTML report from the last run
npx playwright show-report
```

Configuration lives in [`playwright.config.ts`](playwright.config.ts): tests run against `baseURL` `http://localhost:3000`, in parallel, with a 10s timeout and traces enabled. In CI the suite uses a single worker and retries failures twice.

---

## 📁 Project Structure

```text
.
├── src/
│   ├── constants/      # Shared constants (e.g. page URLs)
│   ├── helpers/        # Reusable test helpers
│   └── pages/          # Page Object Models (base, home, login, registration, docs, swagger)
├── tests/              # Test specs
├── lessons/            # Per-lesson snapshots of the framework (see below)
├── .github/            # Copilot instructions, prompts, and CI workflow
├── CODING_STANDARDS.md # Test structure and style conventions
├── TEST_PLAN.md        # Rolnopol test plan with tagging system
└── playwright.config.ts
```

---

## 📚 Working with the Lessons

Each folder under [`lessons/`](lessons/) is an independent project that captures the framework at a specific point in the course, grouped by day (`D01`, `D03`, …) and lesson (`L05`, `L06`, …).

To work through a lesson:

1. Open the lesson folder as its own project.
2. Install dependencies and follow the `README.md` inside that folder.

```bash
cd lessons/D01_init_framework/L09-instructions_for_ai
npm install
npm test
```

---

## 📐 Conventions

- **Test structure** — tests follow the Arrange-Act-Assert (AAA) pattern. See [`CODING_STANDARDS.md`](CODING_STANDARDS.md).
- **Test plan & tags** — coverage and tag categories (`@smoke`, `@critical`, `@auth`, …) are tracked in [`TEST_PLAN.md`](TEST_PLAN.md).
- **Commits** — use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`).

---

# 📞 Contact & Support

Feel free to reach out to us:

- 🌐 **Website**: [jaktestowac.pl](https://jaktestowac.pl)
- 💼 **LinkedIn**: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)
- 💬 **Discord**: [Polish Playwright Community](https://discord.gg/mUAqQ7FUaZ)
- 📧 **Support**: Check our website for contact details

---

# 📚 Learning Resources

We have gathered a collection of resources to help you learn and master Playwright, both in Polish and English. Whether you're a beginner or an advanced user, these resources will help you enhance your skills and knowledge.

## Awesome Copilot for Testers

A curated list of resources, tools, and best practices for using GitHub Copilot in testing. Whether you're a beginner or an experienced tester, this repository will help you leverage the power of AI to enhance your testing workflow:
[Awesome Copilot for Testers](https://github.com/jaktestowac/awesome-copilot-for-testers)

More resources and updates on our [GitHub](https://github.com/jaktestowac).

## 🇵🇱 Polish Resources

- **💡 FREE** [Playwright Resources](https://jaktestowac.pl/darmowy-playwright/) - Comprehensive and Free Polish learning materials
- [JavaScript and TypeScript for Testers](https://jaktestowac.pl/js-ts/) - Comprehensive (13h+) course on JavaScript and TypeScript for testers, with practical examples and exercises
- [Professional Test Automation with Playwright](https://jaktestowac.pl/playwright/) - Comprehensive (100h+) course on Playwright, test automation, CI/CD and test architecture
- [Back-end Test Automation](https://jaktestowac.pl/api/) - Comprehensive (45h+) course on Back-end Test Automation with Postman, Mocha, Chai, and Supertest
- [Playwright Basics](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7) - YouTube series (Polish)
- [Playwright Elements](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA) - Advanced concepts (Polish)
- [Playwright MCP](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4) - MCP course (Polish)
- [Discord Community](https://discord.gg/mUAqQ7FUaZ) - First Polish Playwright community!
- [Playwright Info](https://playwright.info/) - first and only Polish Playwright blog

### AI_Testers

Gain an edge by combining AI knowledge with the most popular tools in the IT market.
We'll show you how to accelerate with AI and build a professional test automation framework. 😉

- [AI_Testers](https://aitesters.pl) - Main page about AI_Testers Program
- [AI_Testers LinkedIn](https://www.linkedin.com/company/aitesters) - Follow us on LinkedIn

## 🇬🇧 English Resources

- [VS Code Extensions](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) - Our free Playwright plugins
- [Playwright Documentation](https://playwright.dev/docs/intro) - Official documentation
- [Playwright GitHub](https://github.com/microsoft/playwright) - Source code and issues

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

---

# 🧠 Copilot Prompts History

A running log of prompts and instructions used with Copilot while building this framework:

- "Remove all comments from the codebase/file"
- "Add setting for VSCode to use default console type Bash"
- "Add setting for VSCode to auto-approve 'git add' and 'git commit' commands in terminal"
- "Update the current tests so they refer to the testing site using the baseUrl placed in #file:playwright.config.ts"
- "Change the test timeout to 5 minutes in the Playwright configuration"
- "Run the tests in parallel and add retries for CI environment in Playwright configuration"
- Change this to conventional commit syntax: Refactor example tests to remove unnecessary cases and update title check
- "Refactor example tests to remove unnecessary cases and update title check"
- "Open user settings.json file in VSCode and add setting to use default console type as Bash"
- Make conventional commit
- Prepare conventional commit instruction to follow this rules when committing changes. Add it to instruction file. Make instruction simple and clear, with examples.
- "Create simple test plan for application with use of official documentation http://localhost:3000/docs.html"
- "Add new rule about using tags form #sym:## Test Plan and Tagging System when creating tests and keep this reference updated"
