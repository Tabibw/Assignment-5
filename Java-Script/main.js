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
document.getElementById('redirectBTN').addEventListener('click',function(){
    window.location.href='../index.html';
})

// Theme changing button
const themeToggleBtn = document.getElementById("theme-toggle");
const themes = ["theme-1", "theme-2", "theme-3"];
let currentThemeIndex = 0;

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.remove(...themes);
  document.body.classList.add(themes[currentThemeIndex]);
  currentThemeIndex = (currentThemeIndex + 1) % themes.length; 
});
