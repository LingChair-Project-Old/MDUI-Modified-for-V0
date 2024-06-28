const CleanCSS = require('clean-css')
const fs = require('node:fs')

const output = new CleanCSS({}).minify(fs.readFileSync("src/mdui.css"))

fs.writeFileSync("dist/mdui.min.css", output.styles)
