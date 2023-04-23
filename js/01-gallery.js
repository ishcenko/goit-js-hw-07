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

let imgList;

function galleryImgClick(e) {
    const { target } = e;
    e.preventDefauit();

    if (target.nodeName !== 'IMG') {
        return
    };

    const imgSours = target.dataset.source;

    imgList = basicLightbox.create(`
    <img src='${imgSours}'>`, {
        onShow: (imgList) => {
            imgList.element().querySelector('img').addEventListener('click, closeModal');
            document.addEventListener('keydown, offImgClose');
        },
        onclose: (imgList) => {
            imgList.element().querySelector('img').removeEventListener('click, closeModal');
            document.removeEventListener('keydown, offImgClose');
        }
    });

    imgList.show();


    function closeModal() {
        imgList.close();
    };

};
function offImgClose(e) {
    if (e.code !== 'Escape') {
        return;

    }
    imgList.close();
};


