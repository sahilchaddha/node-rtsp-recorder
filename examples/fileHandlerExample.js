//
//  fileHandlerExample.js
//  node-rtsp-recorder
//
//  Created by Sahil Chaddha on 24/08/2018.
//

const FileHandler = require('../src/helpers/fileHandler')

const fh = new FileHandler()

fh.getDirectorySize('/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos/', (err, value) => {
  if (err) {
    console.log('Error Occured')
    console.log(err)
    return true
  }
  console.log('Folder Size is ' + value)
})

fh.removeDirectory('/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos/*', () => {
  console.log('Done')
})
