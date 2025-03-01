const goToHomePage = document.getElementsByClassName('goToHomePage')
// const redirectBTN = document.getElementsById('redirectBTN')

// Calander date
function updateDate() {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'short' });
    const fullDate = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

    document.getElementById("day").textContent = day;
    document.getElementById("full-date").textContent = fullDate;
}

updateDate();

// Redirect to secondery.html page
redirectBTN.addEventListener('click', function () {
    window.location.href = 'secondery.html';
})

// Back to main.html page
goToHomePage.addEventListener('click', function () {
    window.location.href = 'main.html';
    console.log(12365);
});