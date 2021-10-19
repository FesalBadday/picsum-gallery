"use strict";
// import picsumAnimals
import { picsumAnimals } from './animals.js';

let output = '';

picsumAnimals.forEach(function (picsumIds) {
  output += `<img src="images/sm/${picsumIds.src}" title="${picsumIds.title}" alt="${picsumIds.alt}">`
});

const gallery = document.querySelector('.gallery');
gallery.innerHTML = output;