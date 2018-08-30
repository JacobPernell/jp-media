// Toggle what's displayed in the services section on hover
const servicesTitle = document.querySelector('.services__info--title');
const servicesVideo = document.querySelector('.services__info--video');
const servicesText = document.querySelector('.services__info--text');
let portName;

// Show portfolio overlay
function openNav(e) {
    document.getElementById("portOverlay").style.width = "100%";
    portName = document.querySelector(`.overlay-content_${e.dataset.portfolio}`);
    portName.style.display = "inline-block";
    portName.classList.toggle("portfolio-display");
}

function closeNav(e) {
    document.getElementById("portOverlay").style.width = "0%";
    portName.classList.toggle("portfolio-display");
    setTimeout(function(){ portName.style.display = "none"; }, 500);
}

// Click to copy email to clipboard
const clipboard = new ClipboardJS('.contact__info');
clipboard.on('success', function(e) {
    document.querySelector('.contact__info--sub').innerHTML = "Email copied!";
    e.clearSelection();
});

// Navbar background fade on scroll
const navBar = document.querySelector('.header');
window.onscroll = function() {
    if (window.pageYOffset > 75) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("nav-transparent");
    } else {
        navBar.classList.add("nav-transparent");
        navBar.classList.remove("nav-colored");
    }
};

// Navbar click to scroll
$(".top-nav__link--about").click(function() {
    $('html,body').animate({
            scrollTop: $(".about").offset().top - $('.header').outerHeight() + 80
        },
        'slow');
});
$(".top-nav__link--portfolio").click(function() {
    $('html,body').animate({
            scrollTop: $(".portfolio").offset().top - $('.header').outerHeight() + 20
        },
        'slow');
});
$(".hero__learn-more").click(function() {
    $('html,body').animate({
            scrollTop: $(".portfolio").offset().top - $('.header').outerHeight() + 20
        },
        'slow');
});
$(".top-nav__link--contact").click(function() {
    $('html,body').animate({
            scrollTop: $(".contact").offset().top - $('.header').outerHeight() + 20
        },
        'slow');
});
$(".hero__cta").click(function() {
    $('html,body').animate({
            scrollTop: $(".contact").offset().top - $('.header').outerHeight() + 20
        },
        'slow');
});
