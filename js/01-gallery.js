import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryListRef = document.querySelector('.gallery');


const markup = galleryItems.map((image) => `<li class="gallery__item">
   <a class="gallery__link" href=${image.original}>
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</li>`).join("");

galleryListRef.insertAdjacentHTML('beforeend', markup);

galleryListRef.addEventListener('click', e => {
    e.preventDefault();
    const chosenImage =  e.target;
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src=${chosenImage.src} width="800" height="600">
    </div>
`)

instance.show()

});

