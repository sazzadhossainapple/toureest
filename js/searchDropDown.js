// Get references to the button and dropdown content
const button = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');

// Function to close the dropdown
function closeDropdown() {
    dropdownContent.style.display = 'none';
}

// Toggle the dropdown when the button is clicked
button.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    if (dropdownContent.style.display === 'block') {
        closeDropdown();
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Handle option selection
const options = document.querySelectorAll('#dropdown-content ul li');
options.forEach((option) => {
    option.addEventListener('click', function () {
        const selectedValue = option.getAttribute('data-value');
        // Update the button text with the selected value
        document.querySelector('.value').textContent = selectedValue;
        // Close the dropdown
        closeDropdown();
    });
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', function (e) {
    if (!button.contains(e.target) && !dropdownContent.contains(e.target)) {
        closeDropdown();
    }
});
