# 🛒 Ecom Cypress Project

This is an end-to-end (E2E) test automation project for an e-commerce web application using [**Cypress**](https://www.cypress.io/) and **Behavior-Driven Development (BDD)** approach with **Cucumber**.

It includes GitHub Actions-based **CI/CD integration**, scheduled runs, and Cypress Dashboard reporting for advanced insights.

---

## 🚀 Features

- ✅ **Cypress** for E2E testing
- 🧪 **BDD (Cucumber + Gherkin)** syntax for writing clear and human-readable tests
- ⚙️ **GitHub Actions CI/CD** to automatically run tests on:
  - Push to `main`
  - Pull requests to `main`
  - Every 5 minutes via `cron` job (can be customized)
- 📊 **Cypress Dashboard integration** for:
  - Video recording and screenshots
  - Test result tracking and debugging

---

## 📁 Project Structure

🔧 Installation & Setup
# Clone the repo
git clone https://github.com/nafis08/EcomCypressProject.git
cd EcomCypressProject
# Install dependencies
npm install
# (Optional) Install Cypress binary
npx cypress install

🧪 Run Tests Locally
# Run all tests in headless mode
npm run test_e2e
# Open Cypress test runner UI
npm run cypress:open

☁️ Run Tests on Cypress Dashboard
npm run cloud_run_test_e2e

⚙️ GitHub Actions CI/CD
CI/CD is configured in .github/workflows/ci.yml to:
Run tests on push, pull_request, and every 5 minutes via cron
Install Cypress binary and run tests automatically
Cache the Cypress binary for faster builds
Record test results to Cypress Dashboard
