#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:tentraicion@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
        value: () => {
          open("https://calendly.com/tentraicion/30min");
          console.log("\n See you at the meeting \n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Hasta la Vista.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("             TenTraicion"),
  handle: chalk.white("@TenTraicion"),
  work: `${chalk.white("A Programmer from Abyss")} ${chalk
    .hex("#2b82b2")
    .bold("Solvinux Solutions, Inc.")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("TenTraicion"),
  github: chalk.gray("https://github.com/") + chalk.green("TenTraicion"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("TenTraicion"),
  project: chalk.gray("https://TenTraicion.github.io/") + chalk.redBright("Hibi-Ciento"),
  web: chalk.cyan("https://TenTraicion.github.io/"),
  npx: chalk.red("npx") + " " + chalk.white("tentraicion"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelProject: chalk.white.bold("    Project:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    "",
    `${data.labelWork}  ${data.work}`,
    "",
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelProject}  ${data.project}`,
    `${data.labelWeb}  ${data.web}`,
    "",
    `${data.labelCard}  ${data.npx}`,
    "",
    `${chalk.italic("I am currently looking for new opportunities,")}`,
    `${chalk.italic("my inbox is always open. Whether you have a")}`,
    `${chalk.italic("question or just want to say hi, I will try ")}`,
    `${chalk.italic("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
