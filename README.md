# rtsp-html5-streaming-capture-frame

- Uses node & ffmpegto convert the RTSP live stream from an IP camera into `<video>` tag of HTML
- Captures frame on button click from video and populates `<img>` tag using canvas. 

# Installation

- `sudo apt-get install ffmpeg nodejs nginx`

- `npm install http-server`

- `cd rtsp-html5-streaming-capture-frame`

- Change RTSP camera path in `livestream.js`

- `nodejs livestream.js`

- Run `http-server` to run `index.html` in a server

- Visit `127.0.0.1:8080`