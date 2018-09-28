#!/usr/bin/env node

const cli = require("commander")
const fs = require("fs")

const version = require("./package.json").version

cli.version(version)

cli
  .command("ls [path]")
  .description("List files in a directory")
  .option("-a, --all", "List hidden files")
  .action((path = process.cwd(), { all }) => {
    let names = fs.readdirSync(path)

    if (!all) {
      names = names.filter(name => !name.startsWith("."))
    }

    names.forEach(name => console.log(name))
  })

cli.parse(process.argv)
