#!/usr/bin/env node

const cli = require("commander")
const version = require("./package.json").version

cli.version(version)

cli.command("echo [args...]").action(args => console.log(args.join(" ")))

cli.parse(process.argv)
