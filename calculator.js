document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const display1 = document.getElementById('primaryDisplay');
    const display2 = document.getElementById('secondaryDisplay');
    let opData = [];
    let displayFlag = false;
    let percentTarget = "";

    buttons.forEach (button => {
        button.addEventListener('click', () => {
            buttonHandler(button);
        });
    });

    function buttonHandler(button) {
        switch (true) {
            case button.classList.contains('num') && opData.length == 0:
                opData.push(button.textContent);
                updateDisplay(0);
                break;
            case button.classList.contains('num') && opData.length == 1:
                    opData[0] += (button.textContent);
                    updateDisplay(0); 
                break;
            case button.classList.contains('num') && opData.length == 2:
                opData.push (button.textContent);
                updateDisplay(2);
                break;
            case button.classList.contains('num') && opData.length == 3:
                    opData[2] += (button.textContent);
                    updateDisplay(2);
                    break;
            case button.id == 'point' && opData.length != 2:
                if (opData.length == 0){
                    opData.push(button.textContent);
                    updateDisplay(0);
                }else if (!opData[opData.length -1].includes('.')){
                    opData[opData.length -1] += (button.textContent);
                    updateDisplay(opData.length -1);
                    break;
                }
                break;    
            case button.classList.contains('op') && opData.length == 0:
                opData.push (0, button.textContent);
                updateDisplay(1);
                break;
            case button.classList.contains('op') && opData.length == 1:
                opData.push (button.textContent);
                updateDisplay(1);
                break;
            case button.classList.contains('op') && opData.length == 2:
                opData[1] = button.textContent;
                updateDisplay(1);
                break;
            case button.id == 'percent':
                    if (opData.length == 1) {
                        percentTarget = "first";
                        operate('%');
                        break;
                    } else if (opData.length == 3) {
                        percentTarget = "second";
                        operate('%');
                        break;
                    }
                    break;
            case button.classList.contains('op') && opData.length == 3:
                let newOperator = button.textContent;
                operate(opData[1]);
                opData[1] = newOperator;
                updateDisplay(4);
                displayFlag = true;
                break;
            
            case button.id == 'equals' && opData.length == 3:
                    updateDisplay(3);
                    operate(opData[1]);
                    break;
            case button.id == 'ac':
                reset();
                updateDisplay(5);
                break;
            case button.id == 'undo':
                undo();
                break;
        }
    }

    function updateDisplay(i){
        switch (i) {
            case 0:
                display1.textContent = opData[0];
                break;
            case 1:
                display1.textContent = opData[0] + opData[1];
                break;
            case 2:
                if (displayFlag) {
                    display1.textContent = opData[2];
                    displayFlag = false;
                }
                else {
                    display1.textContent = opData[0] + opData[1] + opData[2];
                }
                break;
            case 3:
                display2.textContent = opData[0] + opData[1] + opData[2] + "=";
                break;
            case 4:
                display2.textContent = opData[0] + opData[1];
                display1.textContent = "";
                break;
            case 5:
                display1.textContent = 0;
                display2.textContent = "";
                break;
        }
    }

    function addition(a,b){
        reset();
        opData.push (a+b);
        updateDisplay(0);
    }

    function subtraction(a,b){
        reset();
        opData.push (a-b);
        updateDisplay(0);
    }

    function multiplication(a,b){
        reset();
        opData.push (a*b);
        updateDisplay(0);
    }

    function division(a,b){
        reset();
        if (b == 0) {
            display1.textContent = "Self destructing in 3...2...1"
            reset();
        } else {
        opData.push (a/b);
        updateDisplay(0);
        }

    }

    function percent(a,b){
        switch (percentTarget){
            case "first":
                opData[0] = a/100;
                updateDisplay(0);
                break;
            case "second":
                opData[2] = b/100;
                updateDisplay(2);
                break;
            default:
                break;
        }
    }

    function operate(operator){
       let a = parseFloat (opData[0]);
       let b = parseFloat (opData[2]);
        switch (operator){
            case '+':
                addition (a,b);
                break;
            case '-':
                subtraction (a,b);
                break;
            case '*':
                multiplication (a,b);
                break;
            case '/':
                division (a,b);
                break;
            case '%':
                percent (a,b);
                break;
            }
        
    }

    function reset(){
        opData = [];
    }

    function undo(){
        switch (opData.length){
            case 0:
                break;
            case 1:
                opData[0] = opData[0].slice(0, -1);
                updateDisplay(0);
                break;
            case 2:
                break;
            case 3:
                opData[2] = opData[2].slice(0, -1);
                updateDisplay(2);
        }
    }

});