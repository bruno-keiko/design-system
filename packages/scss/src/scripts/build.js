const sass = require('sass')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

const outputDir = path.resolve('../lib')

rimraf.sync(outputDir)

fs.mkdirSync(outputDir, { recursive: true })

const result = sass.renderSync({
  file: path.resolve('../src/'),
  outFile: path.resolve(outputDir, 'globals.css'),
})

fs.writeFileSync(path.resolve(outputDir, 'globals.css'), result.css)
