// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Adicionando um evento de clique para os links da sidebar
    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active"); // Fecha a sidebar ao clicar em um link
        });
    });
});

let currentImageIndex = 0;
const images = [
    'azendinho.jpeg',
    'bertalha.jpeg',
    'capuchinha.jpeg',
    'ora-pro-nobis.jpeg',
    'taioba.jpeg'
];

const imageTitles = [
    'Azedinho',
    'Bertalha',
    'Capuchinha',
    'Ora-Pro-Nobis',
    'Taioba'
];

function showImage(index) {
    const imageElement = document.getElementById('example-image');
    const titleElement = document.getElementById('image-title');
    
    imageElement.src = images[index];
    titleElement.textContent = imageTitles[index];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}
