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

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const original = event.target;
  
  const instance = basicLightbox.create(`
    <img      
      src="${original.dataset.source}"      
      alt="${original.alt}"
    />
`);
  instance.show();
  
  
  gallery.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      instance.close(() => console.log('lightbox not visible anymore'));
      return;
    };
  });
});


