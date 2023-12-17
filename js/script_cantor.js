console.log("Cześć tutaj możesz przeliczyć dowolną kwotę PLN na inne waluty 💸");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.34;
let rateUSD = 4.03;
let rateGBP = 5.06;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <span>${result.toFixed(2)} ${currency}</span>`;
});
