function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play()
}

function toggleMenu() {
    const dropdown = document.getElementById('mobileMenu');
    dropdown.classList.toggle('open');
}