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

