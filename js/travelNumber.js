// Initial counts
let adultCount = 1;
let childrenCount = 0;
let infantCount = 0;

// Function to update the counts and display them
function updateCounts() {
    const adultSpan = document.getElementById('text-adult');
    const childrenSpan = document.getElementById('text-children');
    const infantSpan = document.getElementById('text-infant');

    const adultCountNumber = document.querySelector('.adult-count');
    const childrenCountNumber = document.querySelector('.children-count');
    const infantCountNumber = document.querySelector('.infant-count');

    // show span
    adultSpan.textContent = adultCount;
    childrenSpan.textContent = childrenCount;
    infantSpan.textContent = infantCount;

    // show button value
    adultCountNumber.textContent = `${adultCount} Adult`;
    childrenCountNumber.textContent = `${childrenCount} Children`;
    infantCountNumber.textContent = `${infantCount} Infant`;
}

// Event listener for the 'adult' button
const inputFieldAdult = document.getElementById('adult');
inputFieldAdult.addEventListener('click', () => {
    const adult = document.querySelector('.adult-wrappers');
    adult.classList.toggle('show-adult');
});

// the plus and minus buttons
document
    .querySelectorAll('.btn-adult, .btn-children, .btn-infant')
    .forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index % 2 === 0) {
                // Even index corresponds to the minus button
                if (index === 0 && adultCount > 1) {
                    adultCount--;
                } else if (index === 2 && childrenCount > 0) {
                    childrenCount--;
                } else if (index === 4 && infantCount > 0) {
                    infantCount--;
                }
            } else {
                // Odd index corresponds to the plus button
                if (index === 1) {
                    adultCount++;
                } else if (index === 3) {
                    childrenCount++;
                } else if (index === 5) {
                    infantCount++;
                }
            }

            // Update counts and display
            updateCounts();
        });
    });

// 'Done' button
const doneButton = document.getElementById('done');
doneButton.addEventListener('click', () => {
    const adult = document.querySelector('.adult-wrappers');
    adult.classList.remove('show-adult');
});

// Initial update to display counts
updateCounts();
