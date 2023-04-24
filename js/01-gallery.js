import { galleryItems } from "./gallery-items.js";

const galleryLicstAll = document.querySelector(".gallery");
createGallery(galleryItems);

let bigImageModalWindow;

galleryLicstAll.addEventListener("click", showModal);

function createGallery(galleryData) {
  galleryLicstAll.innerHTML = galleryData
    .map(
      (galleryItem) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`
    )
    .join("");
}

function showModal(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
    };

  event.preventDefault();

  bigImageModalWindow = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  bigImageModalWindow.show();

  window.addEventListener("keydown", closeModal);
};

function closeModal(event) {
  console.log(event);
  if (event.code === "Escape") {
    bigImageModalWindow.close();
    window.removeEventListener("keydown", closeModal);
    };
};
