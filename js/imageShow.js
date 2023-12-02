document
    .getElementById('imageInput')
    .addEventListener('change', handleImageUpload);

function handleImageUpload() {
    const input = document.getElementById('imageInput');
    const imageContainer = document.getElementById('profileImageContainer');
    const image = document.getElementById('profileImage');

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        image.src = e.target.result;
    };

    reader.readAsDataURL(file);
}
