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
