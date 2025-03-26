'use strict';

const menuBtn = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const mobileNav = document.querySelector('.mobile-nav');
const navBarContainer = document.querySelector('.nav-bar-container')
const loaderOverlay = document.querySelector('.loader-overlay');

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

    const map = L.map('map').setView([40.7021, -73.9876], 14);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([40.7021, -73.9876]).addTo(map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            keepInView: true,

        }).setContent(`<div style="font-size: 0.7rem"> Sweetcrumbs Bakery ✨ <br/> Right here! <div/>`))
        .openPopup();
})
