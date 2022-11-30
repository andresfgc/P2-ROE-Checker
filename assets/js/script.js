document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
            runAnalysis();
        })
    }
    /*working also pressing enter
    document.getElementsByClassName('btn-check').addEventListener('keydown', function(event){
        if (event.key ==='Enter') {
            calculateAnswer();
        }
    })*/
})


function runAnalysis() {

    let roe = calculateAnswer()[1];

    if(roe === 'negativeRoe') {
        displayNegativeRoeAnswer();
    } else if (roe === 'lowRoe') {
        displayLowRoeAnswer();
    } else if (roe === 'goodRoe') {
        displayGoodRoeAnswer();
    }else {
        alert(`unknown roe type: ${roe}`);
        throw `Unknown roe type: ${roe}.Aborting!`;
    }    
}

function calculateAnswer() {

    let operand1 = checkRent();
    let operand2 = checkCredit();
    let operand3 = checkEquity();

    let roe = ((operand1 - operand2) / operand3)* 100;

    if(roe <= 0) {
        return [roe, "negativeRoe"];
    } else if(roe > 0 && roe < 5) {
        return [roe, "lowRoe"];
    } else if(roe >= 5) {
        return [roe, "goodRoe"];
    } else {
        alert('Unknown result type ${roe}');
        throw 'Unknown result type ${roe}.Aborting';
    }
}

function checkRent() {
    let operand1 = document.getElementById('rent').value;
    if (operand1 == "") {
        alert("Rent must be filled out");
        throw 'Rent must be filled out".Aborting';
    } else if(operand1 == 0) {
        alert("Rent must be higher than zero");
        throw 'Rent must be higher than zero".Aborting';
    } else if(operand1 < 0) {
        alert("Rent must be a positive value");
        throw 'Rent must be a positive value".Aborting';
    } else {
        return operand1;
    }
}

function checkCredit() {
    let operand2 = document.getElementById('credit').value;
    if (operand2 == "") {
        alert("Credit payment must be filled out");
        throw 'Credit payment must be filled out".Aborting';
    } else if(operand2 == 0) {
        alert("Credit payment must be higher than zero");
        throw 'Credit payment must be higher than zero".Aborting';
    } else if(operand2 < 0) {
        alert("Credit payment must be a positive value");
        throw 'Credit payment must be a positive value".Aborting';
    } else {
        return operand2;
    }
}

function checkEquity() {
    let operand3 = document.getElementById('equity').value;
    if (operand3 == "") {
        alert("Equity must be filled out");
        throw 'Equity must be filled out".Aborting';
    } else if(operand3 == 0) {
        alert("Equity must be higher than zero");
        throw 'Equity must be higher than zero".Aborting';
    } else if(operand3 < 0) {
        alert("Equity must be a positive value");
        throw 'Equity must be a positive value".Aborting';
    } else {
        return operand3;
    }
}

function displayNegativeRoeAnswer() {
    document.getElementById('results').classList.remove('hide');
    document.getElementById('contact').classList.remove('message-area');
    document.getElementById('output-title').textContent = 'ROE is bad';
    document.getElementById('output-description').textContent = `this investment will generate a ROE of ${calculateAnswer()[0]}% and therefore only monthly costs. We recommend you to discuss to your bank the possibility of adjusting the monthly credit payments or find another property.`;
}

function displayLowRoeAnswer() {
    document.getElementById('results').classList.remove('hide');
    document.getElementById('contact').classList.remove('message-area');
    document.getElementById('output-title').textContent = 'ROE is positiv but low';
    document.getElementById('output-description').textContent = `this investment will generate a ROE of ${calculateAnswer()[0]}% but it may not be enough considering the risks. Therefore we recommend you to find another property with at least a ROE of 5%.`;
}

function displayGoodRoeAnswer() {
    document.getElementById('results').classList.remove('hide');
    document.getElementById('contact').classList.remove('message-area');
    document.getElementById('output-title').textContent = 'ROE is good';
    document.getElementById('output-description').textContent = `this investment will generate a ROE of ${calculateAnswer()[0]}% which is a good value considering the risks. Dont forget to consider costs of maintenance, property management and taxes for your final check.`;
}

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_ezv0pio", "template_f6ocuwt", params).then(function(res) {
        alert("success!" + res.status);
    })
}