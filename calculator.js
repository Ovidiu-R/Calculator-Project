document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const display1 = document.getElementById('primaryDisplay');
    const display2 = document.getElementById('secondaryDisplay');
    let operator = null;
    let a = "";
    let b = "";

    buttons.forEach (button => {
        button.addEventListener('click', () => {
            buttonHandler(button);
        });
    });

    function buttonHandler(button) {
        switch (true){
            case (button.classList.contains ('num') && operator == null):
                  a += button.id;
                  break;
            case (button.classList.contains ('num') && operator != null):
                  b += button.id;
                  break;
            case (button.classList.contains ('op') && b == ""):
                  operator = button.textContent;
                  display2.textContent = a + operator;
                  break;
            case (button.classList.contains ('op') && b != ""):
                  operate();
                  break;
            case (button.id == 'ac'):
                  reset();
                  break;
            case (button.id == 'del'):
                  undo();
                  break;
            case (button.id == 'equals'):
                  operate();
                  reset();
                  break;
        }
    }

    function addition(){
        display1.textContent = (a + b);
        a = a + b;
    }

    function subtraction(){
        display1.textContent = (a - b);
        a = a - b;
    }

    function multiplication(){
        display1.textContent = (a * b);
        a = a * b;
    }

    function division(){
        display1.textContent = (a / b);
        a = a / b;
    }

    function percent(){
        if (a != "" && b == ""){
            return parseInt(a)/100;
        } else if (a != "" && b != ""){
            return parseInt(b)/100;
        }
    }

    function operate(){
        a = parseInt(a);
        b = parseInt(b);
        switch (operator){
            case "+":
                addition();
                break;
            case "-":
                subtraction();
                break;
            case "*":
                multiplication();
                break;
            case "/":
                division();
                break;
            case "%":
                percent();
                break;
        }
    }

    function reset(){
        a = "";
        b = "";
        operator = "";
        display1.textContent = "0";
        display2.textContent = "";
    }

    function undo(){

    }

});