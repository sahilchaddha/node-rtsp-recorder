const fs = require('fs')
const rimraf = require('rimraf')
const du = require('du')

const FileHandler = class {
  createDirIfNotExists(folderPath) {
    try {
      if (!fs.lstatSync(folderPath).isDirectory()) {
        fs.mkdirSync(folderPath)
      }
    } catch (e) {
      fs.mkdirSync(folderPath)
    }
  }

  removeDirectory(folderPath, callback) {
    rimraf(folderPath, callback)
  }

  getDirectorySize(folderPath, callback) {
    du(folderPath, (err, size) => {
      callback(err, size)
    })
  }
}

module.exports = FileHandler
