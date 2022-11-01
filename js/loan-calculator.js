// calculating the loan
function calculate() {
    // math
    var money = document.getElementById('money-input').value;
    var rate = document.getElementById('rate-input').value / 100;
    var years = document.getElementById('years-input').value;
    var payments = (money * rate) / years;
   // results
    document.getElementById('money-result').innerHTML = '$' + money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('rate-result').innerHTML = rate * 100 + '%';
    document.getElementById('years-result').innerHTML = years + ' years' ;
    document.getElementById('monthly-result').innerHTML = '$' + payments.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // if user doesn't enter anything then display 0
    if (document.getElementById('years-result').innerHTML === ' years') {
        document.getElementById('years-result').innerHTML = '0 years';
    } if (document.getElementById('monthly-result').innerHTML === '$NaN') {
        document.getElementById('monthly-result').innerHTML = "$0";
    } if (document.getElementById('money-result').innerHTML === '$') {
        document.getElementById('money-result').innerHTML = '$0';
    } else if (document.getElementById('rate-result').innerHTML === '') {
        document.getElementById('rate-result').innerHTML = '0%';
    } else if (document.getElementById('rate-input').value === '14') {
        document.getElementById('rate-result').innerHTML = '14%';
    }

    // if money amount is larger than $750,000 then display 0
    // else if rate is larger than 100% then display 0
    // else if no years in entered but other things are
    if (document.getElementById('money-input').value > 750000) {
        var error = document.getElementById('money-result');
        error.textContent = "Amount too large";
        document.getElementById('rate-result').innerHTML = "0%";
        document.getElementById('years-result').innerHTML = "0 years";
        document.getElementById('monthly-result').innerHTML = "$0";
    } 
    else if (document.getElementById('rate-input').value > 100) {
        var error = document.getElementById('rate-result');
        error.textContent = "Rate too large";
        document.getElementById('money-result').innerHTML = "$0";
        document.getElementById('years-result').innerHTML = "0 years";
        document.getElementById('monthly-result').innerHTML = "$0";
    } 
    else if (document.getElementById('monthly-result').innerHTML === '$Infinity') {
        var error = document.getElementById('monthly-result');
        error.textContent = "Enter # of years";
        document.getElementById('money-result').innerHTML = "$0";
        document.getElementById('rate-result').innerHTML = "0 years";
        document.getElementById('years-result').innerHTML = "$0";
    }
}

// display the loan monthly payment
function displayResults() {
    var calcButton = document.getElementById('calculate');
    if (calcButton.addEventListener) {
        calcButton.addEventListener('click', calculate, false);
    } else if (calcButton.attachEvent) {
        calcButton.attachEvent('onclick', calculate);
    }
}

if(window.addEventListener) {
    window.addEventListener('load', displayResults, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', displayResults);
}