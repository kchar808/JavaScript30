const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      // .createOjectURL(stream) is deprecated
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`OH NOOOO!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0 , 0, width, height);
  }, 16);
}

function takePhoto() {
  // play camera sound
  snap.currentTime = 0;
  snap.play();

  // take data out of canvas
  const data = canvas.toDataURL('/image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute = ('download', 'pretty');
  link.textContent = 'Download Image';
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

// paint video to canvas on page load
video.addEventListener('canplay', paintToCanvas);
