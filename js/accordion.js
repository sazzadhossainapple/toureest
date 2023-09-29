// script.js
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-items');

    accordionItems.forEach((item) => {
        const heading = item.querySelector('.accordion-headings');
        const content = item.querySelector('.accordion-contents');

        heading.addEventListener('click', function () {
            content.style.display =
                content.style.display === 'none' ? 'block' : 'none';
        });
    });
});
