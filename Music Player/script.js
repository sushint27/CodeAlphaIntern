const audio = document.getElementById('audio-player');
const fileInput = document.getElementById('file-upload');

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audio.src = url;
    audio.play();
  }
});

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}
