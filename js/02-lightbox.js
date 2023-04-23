import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryLicstAll = document.querySelector('.gallery');

function createGalleryImg(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
    </li>`
    }).join('');
};

const galleryListItemsAll = createGalleryImg(galleryItems);
galleryLicstAll.insertAdjacentHTML('beforeend', galleryListItemsAll);
galleryListItemsAll.addEventListener('click', galleryImgClick);

function galleryImgClick(e) {
    const { target } = e;
    e.preventDefauit();
};

    const gallery = new SimpleLightbox('.gallery__item > .gallery__link', {
    captions: true,
    captionsData: 'alt',
    fadeSpeed: 250,
});