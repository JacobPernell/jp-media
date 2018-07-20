const portfolioOverlay = document.querySelector('.portfolio__overlay');
const portfolioOverlayTitle = document.querySelector('.portfolio__overlay--title');

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
