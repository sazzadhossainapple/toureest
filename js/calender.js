const daysTag = document.querySelector('.days'),
    currentDate = document.querySelector('.current-date'),
    prevNextIcon = document.querySelectorAll('.icons span'),
    inputField = document.getElementById('datepicker');

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(
            currYear,
            currMonth,
            lastDateofMonth
        ).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
            i === date.getDate() &&
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear()
                ? 'active'
                : '';
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    // Set the initial value of date-text to the current date
    const currentDateSpan = document.querySelector('.date-text');
    currentDateSpan.innerText = `${date.getDate()} ${
        months[date.getMonth()]
    }'${date.getFullYear().toString().substr(-2)}`;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

inputField.addEventListener('click', () => {
    // Show or hide the calendar when clicking the input field
    const calendar = document.querySelector('.wrappers');
    calendar.classList.toggle('show-calendar');
});

// Add click event to each day in the calendar to set the selected date in the input field
daysTag.addEventListener('click', (e) => {
    const selectedDay = e.target.innerText;
    const selectedDate = new Date(currYear, currMonth, selectedDay);

    // Format the selected date as 'DD MMM’YY (e.g., 18 Sep’23)
    const formattedDate = `${selectedDate.getDate()} ${
        months[selectedDate.getMonth()]
    }'${selectedDate.getFullYear().toString().substr(-2)}`;

    // Update the date-text span with the selected date
    const dateTextSpan = document.querySelector('.date-text');
    dateTextSpan.innerText = formattedDate;

    // Hide the calendar after selecting a date
    const calendar = document.querySelector('.wrappers');
    calendar.classList.remove('show-calendar');
});
