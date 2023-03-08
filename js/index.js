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

        generatePin();
    }
}

const pinis = getPin();

console.log(pinis);