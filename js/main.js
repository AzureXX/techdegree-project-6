$('video').mediaelementplayer({
  features: ["playpause", "current", "progress", "duration", "volume", "fullscreen"],
});

const video = $('video')[0];
const spans = $('p span');

video.addEventListener('timeupdate', () => {
  for (let i = 0; i < spans.length; i += 1) {
    let startTime = spans[i].getAttribute('startTime');
    let endTime = spans[i].getAttribute('endTime');
    let currentTime = video.currentTime;
    if (currentTime >= startTime && currentTime <= endTime) {
      spans[i].classList.add('highlight');
    } else {
      spans[i].classList.remove('highlight');
    }
  }
});

spans.click( (e) => {
    video.currentTime = e.target.getAttribute('startTime');
});
