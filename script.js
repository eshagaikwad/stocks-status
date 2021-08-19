var initialP = document.querySelector('#initial-price');
var stocksQ = document.querySelector('#stocks-quantity');
var currentP = document.querySelector('#current-price');
var button = document.querySelector('#button');
var output = document.querySelector('#output');


button.addEventListener('click', buttonhandler);



function buttonhandler() {
var ip = initialP.value;
var qty = stocksQ.value;
var curr = currentP.value;
    

    calculateprofitandloss(ip, qty, curr);
}

function calculateprofitandloss(initial, stocks, current) {
    if (initial > current) {
        var loss = (initial - current) * stocks;
        var percentageloss = (loss / initial) * 100;
    showoutput(`loss is ${loss} and loss percentage is ${percentageloss}%`);
    }
    else if (current > initial) {
        var profit = (current - initial) * stocks;
        var percentageprofit = (profit / initial) * 100;
    showoutput(`profit is ${profit} and profit percentage is ${percentageprofit}%`);
    }
    else {
        showoutput("no pain no gain no gain no pain");
    }
}
function showoutput(message) {
    output.innerHTML = message;
}