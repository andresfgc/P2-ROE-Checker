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

    let operand1 = document.getElementById('rent').value;
    let operand2 = document.getElementById('credit').value;
    let operand3 = document.getElementById('equity').value;

    let roe = ((operand1 - operand2) / operand3)* 100;

    if(roe < 0) {
        return [roe, "negativeRoe"];
    } else if(roe > 0 && roe < 5) {
        return [roe, "lowRoe"];
    } else if(roe > 5) {
        return [roe, "goodRoe"];
    } else {
        alert('Unknown result type ${roe}');
        throw 'Unknown result type ${roe}.Aborting';
    }
}

function displayNegativeRoeAnswer() {
    document.getElementById('output-title').textContent = 'ROE is negativ';
    document.getElementById('output-description').textContent = '`this investment will generate a negativ ROE of ${calculateAnser()%} and therefore only monthly costs. Therefore we recommend you to discuss to your bank the possibility of adjusting the monthly credit payments or find another property.`';
}

function displayLowRoeAnswer() {
    document.getElementById('output-title').textContent = 'ROE is positiv but low';
    document.getElementById('output-description').textContent = '`this investment will generate a ROE of ${calculateAnswer()%} but it may not be enough considering the risks. Therefore we recommend you to find another property with at least a ROE of 5%.`';
}

function displayGoodRoeAnswer() {
    document.getElementById('output-title').textContent = 'ROE is good';
    document.getElementById('output-description').textContent = '`this investment will generate a ROE of ${calculateAnswer()%} which is a good value considering the risks. Dont forget to consider costs of maintenance, property management and taxes for your final check.`';
}