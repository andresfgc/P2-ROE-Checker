document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
            calculateAnswer();
        })
    }
    document.getElementsbyId('answer-box').addEventListener('keydown', function(event){
        if (event.key ==='Enter') {
            calculateAnswer();
        }
    })
})

/**
 * 
 */
function runApplication() {

}

function checkValues() {

}

function calculateAnswer() {
    let operand1 = pasrseInt(document.getElementById('rent').innerText);
    let operand2 = pasrseInt(document.getElementById('credit').innerText);
    let operand3 = pasrseInt(document.getElementById('equity').innerText);

    return [ ((operand1 - operand2) / operand3)* 100];
}