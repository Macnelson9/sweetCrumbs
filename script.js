'use strict';

const menuBtn = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const mobileNav = document.querySelector('.mobile-nav');
const navBarContainer = document.querySelector('.nav-bar-container')
const loaderOverlay = document.querySelector('.loader-overlay')

document.addEventListener('DOMContentLoaded', function () {
    loaderOverlay.style.display = 'none';

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            mobileNav.classList.add('show');
        })
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            mobileNav.classList.remove('show');
        })
    }
})