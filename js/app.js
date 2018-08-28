// Toggle what's displayed in the services section on hover
const servicesTitle = document.querySelector('.services__info--title');
const servicesVideo = document.querySelector('.services__info--video');
const servicesText = document.querySelector('.services__info--text');
const portfolioOverlay = document.querySelector('.overlay');

// function setServicesDisplay(e) {
//     let serviceType = e.target.dataset.servicetype;
//     let fadeSpeed = 110;
//
//     $(".services__info--text").fadeOut(fadeSpeed);
//     $(".services__info--video").fadeOut(fadeSpeed);
//     $(".services__info--title").fadeOut(fadeSpeed);
//
//     setTimeout(function() {
//
//         switch (serviceType) {
//             case 'web':
//                 servicesTitle.innerHTML = "Web Design";
//                 servicesVideo.innerHTML = `
//                 <video width="600" controls>
//                 <source src="../img/services/jpm_musicreel.mp4" type="video/mp4">
//                 Your browser does not support HTML5 video.
//                 </video>`;
//                 servicesText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//                 break;
//             case 'ux':
//                 servicesTitle.innerHTML = "UI / UX Design";
//                 servicesVideo.innerHTML = `
//                 <video width="600" controls>
//                 <source src="../img/services/jpm_musicreel.mp4" type="video/mp4">
//                 Your browser does not support HTML5 video.
//                 </video>`;
//                 servicesText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//                 break;
//             case 'audio':
//                 servicesTitle.innerHTML = "Sonic Branding";
//                 servicesVideo.innerHTML = `
//                 <video width="600" controls>
//                 <source src="../img/services/jpm_musicreel.mp4" type="video/mp4">
//                 Your browser does not support HTML5 video.
//                 </video>`;
//                 servicesText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//                 break;
//             case 'video':
//                 servicesTitle.innerHTML = "Video Production";
//                 servicesVideo.innerHTML = `
//                 <video width="600" controls>
//                 <source src="../img/services/jpm_musicreel.mp4" type="video/mp4">
//                 Your browser does not support HTML5 video.
//                 </video>`;
//                 servicesText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//                 break;
//             case 'marketing':
//                 servicesTitle.innerHTML = "Digital Content Marketing";
//                 servicesVideo.innerHTML = `
//                 <video width="600" controls>
//                 <source src="../img/services/jpm_musicreel.mp4" type="video/mp4">
//                 Your browser does not support HTML5 video.
//                 </video>`;
//                 servicesText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//                 break;
//         }
//     }, fadeSpeed);
//     $(".services__info--text").fadeIn(fadeSpeed);
//     $(".services__info--video").fadeIn(fadeSpeed);
//     $(".services__info--title").fadeIn(fadeSpeed);
// }

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
            scrollTop: $(".about").offset().top - $('.header').outerHeight() + 20
        },
        'slow');
});
$(".top-nav__link--services").click(function() {
    $('html,body').animate({
            scrollTop: $(".services").offset().top - $('.header').outerHeight() + 20
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
$(".top-nav__link--testimonials").click(function() {
    $('html,body').animate({
            scrollTop: $(".testimonials").offset().top - $('.header').outerHeight() + 20
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
