#!/usr/bin/env node

const cli = require("commander")
const version = require("./package.json").version

cli.version(version).parse(process.argv)

cli.help()
