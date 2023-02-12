"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;
    document.documentElement.classList.toggle('menu-open');
}