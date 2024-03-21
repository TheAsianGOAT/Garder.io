const homepage = document.getElementById('homepage');
const playButton = document.getElementById('play');

playButton.addEventListener('click', function() {
  if (homepage) {
    if (homepage.style.display === 'flex') {
      homepage.style.display = 'none'
    } else {
      homepage.style.display = 'none'
    }
  }
})
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    homepage.style.display = 'flex'
  }
});