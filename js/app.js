const portfolioOverlay = document.querySelector('.portfolio__overlay');
const portfolioOverlayTitle = document.querySelector('.portfolio__overlay--title');
const navBar = document.querySelector('.header');

function togglePortfolioOverlay(e) {
    portfolioOverlay.classList.toggle("open");

    let portfolioItem = e.target.parentElement.parentElement.dataset.portfolioinfo;
    console.log(e.target.parentElement.parentElement.dataset.portfolioinfo);
}

function closeOverlay() {
    portfolioOverlay.classList.toggle("open");
}

const clipboard = new ClipboardJS('.contact__info');

clipboard.on('success', function(e) {
    document.querySelector('.contact__info--sub').innerHTML = "Email copied!";
    e.clearSelection();
});

window.onscroll = function () {
    if (window.pageYOffset > 75 ) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("nav-transparent");
    }
    else {
        navBar.classList.add("nav-transparent");
        navBar.classList.remove("nav-colored");
    }
};
