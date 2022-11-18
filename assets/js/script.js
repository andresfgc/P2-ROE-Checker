document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
            calculateAnswer();
        })
    }
    /*working also pressing enter
    document.getElementsByClassName('btn-check').addEventListener('keydown', function(event){
        if (event.key ==='Enter') {
            calculateAnswer();
        }
    })*/
})


function checkValues(roeType) {
    let roe = calculateAnswer();
    let redValue = roe < 0;
    let yellowValue = roe > 0 && roe < 5;
    let blueValue = roe > 5;

    if(roe === 'redValue') {
        displayRedAnswer();
    } else if(roe === 'yellowValue') {
        displayYellowAnswer();
    } else if(roe === 'blueValue') {
        displayBlueAnswer();
    } else {
        alert('Unknown result type ${roe}');
        throw 'Unknown result type ${roe}.Aborting';
    }
}

function calculateAnswer() {
    //-parseInt removed--//
    let operand1 = document.getElementById('rent').value;
    let operand2 = document.getElementById('credit').value;
    let operand3 = document.getElementById('equity').value;

    //--Math.floor--//
    return ((operand1 - operand2) / operand3)* 100;
}

function displayRedAnswer() {
    removeClass('hide');
    document.getElementById('output-title').textContent = 'ROE is negativ';
    document.getElementById('output-description').textContent = '`this investment will generate a negativ ROE of ${calculateAnser()%} and therefore only monthly costs. Therefore we recommend you to discuss to your bank the possibility of adjusting the monthly credit payments or find another property.`';
}

function displayYellowAnswer() {
    removeClass('hide');
    document.getElementById('output-title').textContent = 'ROE is positiv but low';
    document.getElementById('output-description').textContent = '`this investment will generate a ROE of ${calculateAnswer()%} but it may not be enough considering the risks. Therefore we recommend you to find another property with at least a ROE of 5%.`';
}

function displayBlueAnswer() {
    removeClass('hide');
    document.getElementById('output-title').textContent = 'ROE is good';
    document.getElementById('output-description').textContent = '`this investment will generate a ROE of ${calculateAnswer()%} which is a good value considering the risks. Dont forget to consider costs of maintenance, property management and taxes for your final check.`';
}