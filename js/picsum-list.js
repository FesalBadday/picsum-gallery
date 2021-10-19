"use strict";
// import picsumAnimals
import { picsumAnimals } from './animals.js';

let output = '';

picsumAnimals.forEach(function (picsumIds) {
  output += `<a href="https://picsum.photos/id/${picsumIds.id}/300" target="_blank">
  <img src="images/sm/${picsumIds.src}" title="${picsumIds.title}" alt="${picsumIds.alt}">
  </a>`
});

const gallery = document.querySelector('.gallery');
gallery.innerHTML = output;