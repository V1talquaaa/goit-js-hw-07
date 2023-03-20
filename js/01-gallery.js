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

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()

})

