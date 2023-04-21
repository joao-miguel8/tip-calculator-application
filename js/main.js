// Inputs:
let billPayment = document.querySelector(".bill-input");
let numberOfPeople = document.querySelector(".people-amount-input");
let customTipInput = document.querySelector(".custom-tip");
// Button Tips:
let percentButtons = document.querySelectorAll(".percent");

const tipTotal = document.querySelector(".tip-total");
const tipPerPerson = document.querySelector(".tip-per-person");
const resetButton = document.querySelector(".reset");
let tip;

// adding an event listener to all percent buttons
percentButtons.forEach((btn) => {
    btn.addEventListener("click", TipAmount);
});

// calculating the tip
function calculateTip(val) {
    return +billPayment.value * (val / 100);
}

// onchange for eventlistener custom Input
customTipInput.addEventListener("change", TipAmount);

function TipAmount(e) {
    let calculatedTotal = calculateTip(e.target.value);
    tip = (+calculatedTotal).toFixed(2);
    if (+numberOfPeople.value !== 0 && tip !== undefined) {
        calcPerPerson();
    }
}

// onchange for eventlistener People Amount Input
numberOfPeople.addEventListener("change", calcPerPerson);

function calcPerPerson(e) {
    if (tip) {
        let personCount = +numberOfPeople.value;
        let totalAmount = +billPayment.value;
        let totalAfterTip = Number(totalAmount + +tip);
        tipTotal.innerText = (totalAfterTip / personCount).toFixed(2);
        tipPerPerson.innerText = (tip / personCount).toFixed(2);
    }
}

//reset values function

resetButton.addEventListener("click", resetValues);

function resetValues() {
    billPayment.value = "";
    numberOfPeople.value = "";
    tipPerPerson.innerText = +0;
    tipTotal.innerText = +0;
}
