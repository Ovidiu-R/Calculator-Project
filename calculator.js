document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const display1 = document.getElementById('primaryDisplay');
    const display2 = document.getElementById('secondaryDisplay');
    let opData = ['', '', ''];

    buttons.forEach (button => {
        button.addEventListener('click', () => {
            buttonHandler(button);
        });
    });

    function buttonHandler(button) {
        switch (true) {
            case button.classList.contains('num') && opData.length <= 1:
                opData[0] += button.textContent;
                break;
            case button.classList.contains('num') && opData.length >= 2:
                opData[2] += (button.textContent);
                break;
            case button.classList.contains('op') && opData.length == 0:
                opData[0] = 0;
                opData[1] = button.textContent;
                break;
            case button.classList.contains('op') && opData.length == 1 || opData.length == 2:
                opData[1] = button.textContent;
                break;
            case button.classList.contains('op') && opData.length == 3:
                operate();
                break;
            case button.id == 'equals' && opData.length == 3:
                operate();
                break;
            case button.id == 'special' && opData.length != 0:
                percent();
                break;
            case button.id == 'ac':
                reset();
                break;
            case button.id == 'undo':
                undo();
                break;
        }
    }

    function addition(a,b){
          
    }

    function subtraction(a,b){
        
    }

    function multiplication(a,b){
       
    }

    function division(a,b){
        

    }

    function percent(a,b){
        
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
        
    }

    function undo(){

    }

});