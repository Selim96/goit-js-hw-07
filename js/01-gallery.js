import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");
gallery.insertAdjacentHTML("beforeend", markup);
console.log(gallery);

const picture = document.querySelector("")
gallery.addEventListener("click", getoriginal);

function getoriginal(event) {
    const original = event.target;
    return original;
}

