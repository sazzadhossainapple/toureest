$(document).ready(function () {
    // Add a click event handler for the tab-links
    $('.tab-links a').on('click', function () {
        // Hide all <p> elements with class 'boder-line'
        $('.tab-links .boder-line').hide();

        // Show the <p> element within the clicked tab-link's parent <li>
        $(this).closest('.tab-links').find('.boder-line').show();

        // Remove the 'active' class from all tab-links
        $('.tab-links').removeClass('active');

        // Add the 'active' class to the clicked tab-link's parent <li>
        $(this).closest('.tab-links').addClass('active');
    });
});
