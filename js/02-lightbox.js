import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map((item) =>

`<li class="gallery__item">
<a class="gallery__link" href=${item.original}>
   <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>
</li>`
).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', e => {
    e.preventDefault();
 const openGalleryImage = new SimpleLightbox('.gallery a', { });
 
});


console.log(galleryItems);
