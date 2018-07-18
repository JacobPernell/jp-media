const portfolioOverlay = document.querySelector('.portfolio__overlay');
const portfolioOverlayTitle = document.querySelector('.portfolio__overlay--title');

function togglePortfolioOverlay() {
    portfolioOverlay.classList.toggle("open");
}

const clipboard = new ClipboardJS('.contact__info');

clipboard.on('success', function(e) {
    document.querySelector('.contact__info--sub').innerHTML = "Email copied!";
    e.clearSelection();
});
