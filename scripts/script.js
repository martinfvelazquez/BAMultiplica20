let runningTotal = 0;
let buffer = "0";
let previousOper;

const screen = document.querySelector('.calc-screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOper === null){
                return;
            }
            flushOperation(parseFloat(buffer));
            previousOper = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }

}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const floatBuffer = parseFloat(buffer);

    if(runningTotal === 0){
        runningTotal = floatBuffer;
    }else{
        flushOperation(floatBuffer);
    }
    previousOper = symbol;
    buffer = '0'
}

function flushOperation(floatBuffer){
    if(previousOper === '+'){
        runningTotal += floatBuffer;
    }else if(previousOper === '−'){
        runningTotal -= floatBuffer;
    }else if(previousOper === '×'){
        runningTotal *= floatBuffer;
    }else if(previousOper === '÷'){
        runningTotal /= floatBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();