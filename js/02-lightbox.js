import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
createGallery(galleryItems);

function createGallery(galleryData) {
  gallery.innerHTML = galleryData
    .map(
      (galleryItem) => `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>
</li>`
    )
    .join("");
}

let boxImage = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});


// import { galleryItems } from './gallery-items.js';
// // Change code below this line



// const galleryLicstAll = document.querySelector('.gallery');

// galleryItems.forEach(({ preview, original, description }) => {
//     const galleryImg = document.createElement('li');
//     galleryImg.classList.add('gallery__item');

//     const linkImg = document.createElement('a');
//     linkImg.classList.add('gallery__link');
//     linkImg.href = original;

//     const imgCard = document.createElement('img');
//     imgCard.classList.add('gallery__image');
//     imgCard.src = preview;
//     imgCard.alt = description;

//     linkImg.append(imgCard);
//     galleryImg.append(linkImg);
//     galleryLicstAll.append(galleryImg);
// });

// const boxImage = new SimpleLightbox('.gallery a', {
//     captionsData: "alt",
//     captionDelay: 250,
// });

// console.log(galleryItems);