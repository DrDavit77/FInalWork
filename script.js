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

// calculator code
// *************
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
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})

// COnverter Code
// *************
let apiKey = "65f0ab62661ef11690ca02eb";
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "GEL";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if (amount.length != 0) {
        fetch(api)
            .then((resp) => resp.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency};`
            });
    } else {
        alert("Please fill the amount")
    }
};

document
    .querySelector("#convert-button")
    .addEventListener("click", convertCurrency);
window.addEventListener("load", ConvertCurrency);




