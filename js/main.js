$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    responsiveClass: true,
    merge: true,
    responsive: {
        0: {
            items: 1.5,
            mergeFit: true,
            nav: true
        },
        500: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            // margin: 100,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})





// User sidebar

const toggleBtn = document.querySelector('.toggle-btn');
const userSidebar = document.querySelector('.sidebar');
const usersideOverlay = document.querySelector('.overlay-sidebar');
const UserSidebarCross = document.querySelector('.User-sidebar__cross');



function showOverlayAndFilter() {
    userSidebar.classList.toggle('show');
    usersideOverlay.style.display = "block";
}

function hideOverlayAndFilter() {
    userSidebar.classList.toggle('show');
    usersideOverlay.style.display = "none";
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', showOverlayAndFilter);
}

if (usersideOverlay) {
    usersideOverlay.addEventListener('click', hideOverlayAndFilter);
}
if (UserSidebarCross) {
    UserSidebarCross.addEventListener('click', hideOverlayAndFilter);
}

let arrowBack = document.querySelector('.arrow-right');
let fixedBox = document.querySelector('.fixed-box');

arrowBack.addEventListener('click', function() {
    fixedBox.classList.toggle('translate-left');
    arrowBack.classList.toggle('rotate-icon');
})