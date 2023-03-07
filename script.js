const img = document.querySelector('img');

function toggleFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        img.requestFullscreen();
    }
}

img.addEventListener('click', toggleFullscreen);

function enlargeOnHover() {
    img.style.transform = 'scale(1.1)';
}

function reduceOnLeave() {
    img.style.transform = '';
}

img.addEventListener('mouseenter', enlargeOnHover);
img.addEventListener('mouseleave', reduceOnLeave);