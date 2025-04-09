const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucmberReports",
  reportPath: "./cypress/cucmberReports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "100",
    },
    device: "Local test machine",
    platform: {
      name: "Mac",
      version: "Sonoma",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Ecom Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});