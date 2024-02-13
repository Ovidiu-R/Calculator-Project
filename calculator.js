document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const display1 = document.getElementById('primaryDisplay');
    const display2 = document.getElementById('secondaryDisplay');
    let opData = [];

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
                opData[0] += button.textContent;
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
            case button.classList.contains('op') && opData.length == 3:
                operate(opData);
                updateDisplay(2);
                break;
            case button.id == 'equals' && opData.length == 3:
                operate(opData);
                break;
            case button.id == 'percent' && opData.length !=0:
                opData[1] = button.textContent;
                operate(opData);
                break;
            case button.id == 'ac':
                reset();
                updateDisplay();
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
                display1.textContent = opData[0] + opData[1] + opData[2];
                break;
            default:
                display1.textContent = 0;
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
        switch (opData.length){
            case 1:
                opData[1].textContent = a/100;
                updateDisplay(0);
                break;
            case 3:
                opData[2].textContent = b/100;
                updateDisplay(2);
        }
    }

    function operate(){
       let a = parseFloat (opData[0]);
       let b = parseFloat (opData[2]);
       switch (opData[1]){
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