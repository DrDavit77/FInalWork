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


const display = document.getElementById('inputBox')
const buttons = document.querySelectorAll(".calcbutton")
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0,-1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})