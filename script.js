let mobileMenu = document.querySelector(".header_nav")
let burger = document.querySelector(".fa-bars")
let xMark = document.querySelector(".fa-xmark")

burger.addEventListener("click", () => {
    mobileMenu.classList.add("aactive")
    burger.style.display = "none";
    xMark.style.display = "block";
});

xMark.addEventListener("click", () => {
    mobileMenu.classList.remove("aactive")
    burger.style.display = "block";
    xMark.style.display = "none";
})