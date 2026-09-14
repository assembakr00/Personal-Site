document.getElementById('year').textContent = new Date().getFullYear();

const themebutton = document.getElementById("theme-toggle")
const htmlElement = document.documentElement;


themebutton.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");

    if (currentTheme === "light"){
        htmlElement.setAttribute("data-theme", "dark");
    } else {
        htmlElement.setAttribute("data-theme", "light");
    }

});