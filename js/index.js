function generatePin(){
    const pin = Math.round(Math.random()*10000);
    return pin;
}

function getPin(){

    const pinIs = generatePin();

    const pinInString = pinIs + '';

    if(pinInString.length === 4){

        return pinInString;
    }
    else{

       return generatePin();
    }
}

document.getElementById('btn-generate').addEventListener('click',function(){

    document.getElementById('random-input-field').value = getPin();
});


document.getElementById('calculator-parent').addEventListener('click',function(event){

    const previousValue = document.getElementById('calculator-value').value;

    if(isNaN(event.target.innerText)){

        if(event.target.innerText === 'C'){
        
            document.getElementById('calculator-value').value = '';

            }
        else if(event.target.innerText === '<'){
        
            const calculatorValueInsplit = previousValue.split('');

            calculatorValueInsplit.pop();

            const remaingValue = calculatorValueInsplit.join('');
        
            document.getElementById('calculator-value').value = remaingValue;
            
            }
    }

    else{
            const currentValue = event.target.innerText;

            document.getElementById('calculator-value').value = previousValue + currentValue;
    }

});

let i = 3;

document.getElementById('submit-button').addEventListener('click',function(){

    const pin = document.getElementById('random-input-field').value ;

    const calculatorValueInString = document.getElementById('calculator-value').value;
    
    if(pin == calculatorValueInString){

        document.getElementById('matching').classList.remove('d-none');
        document.getElementById('not-match').classList.add('d-none');
        document.getElementById('submit-button').classList.add('d-none');
        document.getElementById('tryParent').classList.add('d-none');
    }

    else {

        document.getElementById('not-match').classList.remove('d-none');
        document.getElementById('matching').classList.add('d-none');
        i--;
        if(i === 0){
            
            document.getElementById('submit-button').classList.add('d-none');
        }
        document.getElementById('try').innerText = i;

    }
});