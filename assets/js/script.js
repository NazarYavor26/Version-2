const toggleButton = document.getElementById("toggle_button");
const headerMainNav = document.getElementById("header_main_nav");

toggleButton.addEventListener("click", () => {
    headerMainNav.classList.toggle("active");
})