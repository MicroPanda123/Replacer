// ==UserScript==
// @name         Replacer
// @version      0.1
// @description  try to take over the world!
// @author       MicroPanda123
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

const images = [(list of links to photos)];

function dupsko() {
    var links = Array.prototype.slice.call(document.querySelectorAll("img"));
    var links2 = Array.prototype.slice.call(document.querySelectorAll("source"));
    for (var i = 0; i < links.length; i++) {
        links[i].src = images[Math.floor(Math.random() * images.length)];
        links[i].srcset = images[Math.floor(Math.random() * images.length)];
    }
    for (var i = 0; i < links2.length; i++) {
        links2[i].src = images[Math.floor(Math.random() * images.length)];
        links2[i].srcset = images[Math.floor(Math.random() * images.length)];
    }
}

window.addEventListener('onload', dupsko(), false);
