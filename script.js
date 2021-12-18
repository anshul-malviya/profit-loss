const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#btn");
const outputBox = document.querySelector("#output");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    if (initialPrice.value, stockQuantity.value, currentPrice.value === "") {
        showOutput(`Please fill out all required fields`)
    } else {
        const ip = Number(initialPrice.value);
        const qty = Number(stockQuantity.value);
        const curr = Number(currentPrice.value);

        calculateProfitAndLoss(ip, qty, curr);
    }
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}% `);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}% `);

    } else {
        showOutput(`No pain no gain and no gain no pain`);
    }
}

function showOutput(message) {

    outputBox.innerHTML = message;
}