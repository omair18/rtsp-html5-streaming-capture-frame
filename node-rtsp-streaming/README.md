# rtsp-html5-streaming-capture-frame

- Uses nodejs & ffmpeg to convert the RTSP live stream from an IP camera into `<JSMpeg>` tag of HTML
- Captures frame on button click from video and populates `<img>` tag using canvas. 

# Installation

- `sudo apt-get install ffmpeg nodejs`

- `npm install http-server node-rtsp-stream`

- `cd node-rtsp-streaming`

- Change RTSP camera path in `app.js`

- `node app.js`

- Run `http-server` to run `index.html` in a server

- Visit `127.0.0.1:8080`

![Sample](https://github.com/omair18/rtsp-html5-streaming-capture-frame/blob/master/node-rtsp-streaming/screenshot.png)
