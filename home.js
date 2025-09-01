
document.getElementById("logout").addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "login.html"
})
function getConvertedInput(id) {
    return parseFloat(document.getElementById(id).value);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function getInnerText(id) {
    return parseInt(document.getElementById(id).innerText);
}
function pinValidation(num) {
    let pins = document.getElementsByClassName("pin")
    return (pins[num].value === "2310");


}
function historyFromButton(button) {
    const section = button.closest('.actions');
    const headline = section.querySelector('h1')?.innerText || 'Transaction';

    document.getElementById('entry').innerHTML += `
        <div class="flex items-center gap-3 p-3 mb-3 bg-white rounded-lg shadow">
            <img src="assets/purse1.png" class="bg-gray-200 rounded-3xl p-3 w-12 h-12" />
            <div>
                <h1 class="font-bold">${headline}</h1>
                <p class="text-sm text-gray-500">Today ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        </div>
    `;
}
document.getElementById('add-money').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = getInputValue('bankType');
    const account = getInputValue("accountNumber");
    const addAmount = getConvertedInput('amount-add');
    const initialAmount = getInnerText('initial-amount');
    if (account.length < 11) {
        return (window.alert("Invalid Account"));
    }
    if (addAmount <= 0) {
        return (window.alert("Invalid Amount"))
    }
    if (!pinValidation(0)) {
        return (window.alert("Invalid pin"))
    }

    let newInitialAmount = initialAmount + addAmount;
    document.getElementById("initial-amount").innerText = newInitialAmount;
    historyFromButton(this)
})


document.getElementById('cashOut').addEventListener('click', function (e) {
    e.preventDefault();

    const account = getInputValue("agentNumber");
    const withdrawAmount = getConvertedInput('amount-withdraw');
    const initialAmount = getInnerText('initial-amount');
    if (account.length < 11) {
        return (window.alert("Invalid Account"));
    }
    if (withdrawAmount <= 0) {
        return (window.alert("Invalid Amount"))
    }
    if (!pinValidation(1)) {
        return (window.alert("Invalid Pin"))
    }
    if (initialAmount<1 || initialAmount<withdrawAmount){
        return (window.alert("Insufficient Balance"))
    }
    let newInitialAmount = initialAmount - withdrawAmount;
    document.getElementById("initial-amount").innerText = newInitialAmount;
    historyFromButton(this)
})


document.getElementById('transfer').addEventListener('click', function (e) {
    e.preventDefault();

    const account = getInputValue("recivingAccount");
    const amountSend = getConvertedInput('amountSend');
    const pin = getInputValue("pin");
    const initialAmount = getInnerText('initial-amount');
    if (account.length < 11) {
        return (window.alert("Invalid Account"));
    }
    if (amountSend <= 0) {
        return (window.alert("Invalid Amount"))
    }
    if (!pinValidation(2)) {
        return (window.alert("Invalid Pin"))
    }
     if (initialAmount<1 || initialAmount<amountSend){
        return (window.alert("Insufficient Balance"))
    }
    let newInitialAmount = initialAmount - amountSend;
    document.getElementById("initial-amount").innerText = newInitialAmount;
    historyFromButton(this)
})


document.getElementById('GetBonus').addEventListener('click', function (e) {
    e.preventDefault();
    const bonus = getInputValue('bonusCoupon');
    const initialAmount = getInnerText('initial-amount');
    if (bonus !== "payooo50") {
        return (window.alert("Invalid coupon"));
    }

    let newInitialAmount = initialAmount + 50;
    document.getElementById("initial-amount").innerText = newInitialAmount;
    historyFromButton(this)
})


document.getElementById('payment').addEventListener('click', function (e) {
    e.preventDefault();
    const billType = getInputValue('billType');
    const account = getInputValue("billerAccount");
    const amountPay = getConvertedInput('amountPay');
    const initialAmount = getInnerText('initial-amount');
    if (account.length < 11) {
        return (window.alert("Invalid Account"));
    }
    if (amountPay <= 0) {
        return (window.alert("Invalid Amount"))
    }
    if (document.getElementById("pin").value !== "2310") {
        return (window.alert("Invalid pin"))
    }
     if (initialAmount<1 || initialAmount<amountPay){
        return (window.alert("Insufficient Balance"))
    }

    let newInitialAmount = initialAmount-amountPay;
    document.getElementById("initial-amount").innerText = newInitialAmount;
    historyFromButton(this)
})


let functionButtons = document.getElementsByClassName("functionButtons")
let actions = document.getElementsByClassName('actions')
for (let i = 0; i < functionButtons.length; i++) {
    functionButtons[i].addEventListener("click", function (e) {
        e.preventDefault();
        for (let action of actions) {

            action.style.display = "none";

        }
        actions[i].style.display = "block";
    })

}