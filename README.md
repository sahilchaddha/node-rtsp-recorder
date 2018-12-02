# node-rtsp-recorder

RTSP Stream Recorder.

[![NPM](https://nodei.co/npm/node-rtsp-recorder.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-rtsp-recorder/)

[![npm](https://img.shields.io/npm/dm/node-rtsp-recorder.svg)](https://www.npmjs.com/package/node-rtsp-recorder)
[![npm](https://img.shields.io/npm/v/node-rtsp-recorder.svg)](https://www.npmjs.com/package/node-rtsp-recorder)
[![CircleCI](https://circleci.com/gh/sahilchaddha/node-rtsp-recorder.svg?style=svg)](https://circleci.com/gh/sahilchaddha/node-rtsp-recorder)

Records RTSP Audio/Visual Streams to local disk using ffmpeg

## Installation

```shell
    $ npm install --save node-rtsp-recorder
```

## Recording Video 

```js
    const Recorder = require('node-rtsp-recorder').Recorder

    var rec = new Recorder({
        url: 'rtsp://192.168.1.12:8554/unicast',
        timeLimit: 60, // time in seconds for each segmented video file
        folder: '/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos',
        name: 'cam1',
    })
    // Starts Recording
    rec.startRecording();

    setTimeout(() => {
        console.log('Stopping Recording')
        rec.stopRecording()
        rec = null
    }, 300000)
```

## Recording Audio 

```js
    const Recorder = require('node-rtsp-recorder').Recorder

    var rec = new Recorder({
        url: 'rtsp://192.168.1.12:8554/unicast',
        timeLimit: 60, // time in seconds for each segmented video file
        folder: '/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos',
        name: 'cam1',
        type: 'audio',
    })
    
    rec.startRecording();

    setTimeout(() => {
        console.log('Stopping Recording')
        rec.stopRecording()
        rec = null
    }, 125000)
```

## Capturing Image

```js
    const Recorder = require('node-rtsp-recorder').Recorder

    var rec = new Recorder({
        url: 'rtsp://192.168.1.12:8554/unicast',
        folder: '/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos',
        name: 'cam1',
        type: 'image',
    })

    rec.captureImage(() => {
        console.log('Image Captured')
    })
```

## Managing Media Directory

```js
    const FileHandler = require('../src/helpers/fileHandler')
    const fh = new FileHandler()
    // RETURNS DIRECTORY SIZE
    fh.getDirectorySize('/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos/', (err, value) => {
    if (err) {
        console.log('Error Occured')
        console.log(err)
        return true
    }
    console.log('Folder Size is ' + value)
    })
    // REMOVES ALL MEDIA FILES
    fh.removeDirectory('/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos/*', () => {
    console.log('Done')
    })
```

### Setting custom filename formats

```js
    const Recorder = require('node-rtsp-recorder').Recorder

    var rec = new Recorder({
        url: 'rtsp://192.168.1.12:8554/unicast',
        timeLimit: 60, // time in seconds for each segmented video file
        folder: '/Users/sahilchaddha/Sahil/Projects/Github/node-rtsp-recorder/videos',
        name: 'cam1',
        directoryPathFormat: 'MMM-D-YYYY',
        fileNameFormat: 'M-D-h-mm-ss',
    })
    // Default directoryPathFormat : MMM-Do-YY
    // Default fileNameFormat : YYYY-M-D-h-mm-ss
    // Refer to https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/ for custom formats.
    // Starts Recording
    rec.startRecording();
```