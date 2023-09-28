document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail-link');

    function changeMainImage(event) {
        event.preventDefault();
        const thumbnail = event.currentTarget;
        const newImageSrc = thumbnail.querySelector('img').src;
        mainImage.src = newImageSrc;
    }

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', changeMainImage);
    });
});
