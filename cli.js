#!/usr/bin/env node

const cli = require("commander")
const version = require("./package.json").version

cli.version(version)

cli.on("command:*", () => {
  if (cli.args.length) {
    console.error("Invalid command: %s\n", cli.args.join(" "))
  }

  cli.help()
})

cli.parse(process.argv)
