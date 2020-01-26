// Cited: https://codepen.io/SitePoint/pen/yXWXaw
// The 3D carousel

$(document).ready(() => {
    let
        carousel = document.querySelector('.carousel'),
        figure = carousel.querySelector('figure'),
        nav = carousel.querySelector('nav'),
        numImages = figure.childElementCount,
        theta = 2 * Math.PI / numImages,
        currImage = 0;

    nav.addEventListener('click', onClick, true);

    function onClick(e) {
        e.stopPropagation();

        let t = e.target;
        if (t.tagName.toUpperCase() != 'BUTTON')
            return;

        if (t.classList.contains('next')) {
            currImage++;
        } else {
            currImage--;
        }

        figure.style.transform = `rotateY(${currImage * -theta}rad)`;
    }



    // 2nd carousel



});