#!/usr/bin/env node

const cli = require("commander")
const fs = require("fs")

const version = require("./package.json").version

cli.version(version)

cli
  .command("ls [path]")
  .description("List files in a directory")
  .action((path = process.cwd()) =>
    fs.readdirSync(path).forEach(file => console.log(file))
  )

cli.parse(process.argv)
