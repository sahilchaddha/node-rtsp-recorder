//
//  recordExample.js
//  node-rtsp-recorder
//
//  Created by Sahil Chaddha on 24/08/2018.
//

const Recorder = require('../src/helpers/recorder')

var rec = new Recorder({
  url: 'rtsp://192.168.1.12:8554/unicast',
  timeLimit: 60,
  folder: '/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos',
  name: 'cam1',
  directoryPathFormat: 'MMM-Do-YY',
  fileNameFormat: 'YYYY-M-D-h-mm-ss',
})
rec.startRecording();

setTimeout(() => {
  console.log('Stopping Recording')
  rec.stopRecording()
  rec = null
}, 300000)
