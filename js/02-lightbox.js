import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join("");
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const original = event.target;

  if (original === gallery) {
    return;
  };
  const lightbox = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionPosition': 'bottom', 'captionDelay': 250});
    lightbox.open;
  
  gallery.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      lightbox.close;
      return;
    };
  });
});