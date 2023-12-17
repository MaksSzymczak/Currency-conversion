{ const welcome = () => {
    console.log("Cześć tutaj możesz przeliczyć dowolną kwotę PLN na inne waluty 💸");
}
welcome();


const calculateResult = (amount, currency) => {
    const rateEUR = 4.34;
    const rateUSD = 4.03;
    const rateGBP = 5.06;

switch (currency) {
    case "EUR":
        return amount / rateEUR;

    case "USD":
        return amount / rateUSD;

    case "GBP":
        return amount / rateGBP;
} 
};
const uptadeResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result"); 
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <span>${result.toFixed(2)} ${currency}</span>`;
};

 const onFormSumbit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        
        const amount = +amountElement.value;
        const currency = currencyElement.value
    
        const result = calculateResult(amount, currency);
     uptadeResultText(amount, result, currency, );
    };
 


const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSumbit);
}
init(); 
}