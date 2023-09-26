// first search bar
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

// second search bar

$('[name=tab]').each(function (i, d) {
    var p = $(this).prop('checked');
    //   console.log(p);
    if (p) {
        $('article').eq(i).addClass('on ');
    }
});

$('[name=tab]').on('change', function () {
    var p = $(this).prop('checked');

    // $(type).index(this) == nth-of-type
    var i = $('[name=tab]').index(this);

    $('article').removeClass('on');
    $('article').eq(i).addClass('on');
});

// radion button label active class added

$(document).ready(function () {
    // Initial check
    updateTabActiveClass();

    // Handle radio button changes
    $('[name=tab]').on('change', function () {
        updateTabActiveClass();
    });

    function updateTabActiveClass() {
        $('[name=tab]').each(function (i, d) {
            var p = $(this).prop('checked');
            if (p) {
                $('.tab-name').eq(i).addClass('tab-active');
            } else {
                $('.tab-name').eq(i).removeClass('tab-active');
            }
        });
    }
});

// price range calculate

const rangeInput = document.querySelectorAll('.range-input input'),
    priceInput = document.querySelectorAll('.price-input input'),
    range = document.querySelector('.slider .progress');
let priceGap = 1000;

priceInput.forEach((input) => {
    input.addEventListener('input', (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === 'input-min') {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right =
                    100 - (maxPrice / rangeInput[1].max) * 100 + '%';
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === 'range-min') {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
    });
});

// login password icon show

const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    }
});
