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
        switch (button){
            case (button.class == 'num' && operator == null):
                  a += button.id;
                  break;
            case (button.class == 'num' && operator != null):
                  b += button.id;
                  break;
            case (button.class == 'op' && operator != null):
                  operator = button.textContent;
            case (button.class == 'special'):
                  specialHandler(button);
        }
    }

    function specialHandler(button){
        switch (button){
            case (button.id == 'ac'):
                reset();
                break;
            case (button.id == 'del'):
                undo();
                break;
            case (button.id == 'equals'):
                operate();
                break;
        }
    }

    function addition(a,b){
        return a + b;
    }

    function subtraction(a,b){
        return a - b;
    }

    function multiplication(a,b){
        return a * b;
    }

    function division(a,b){
        return a / b;
    }

    function percent(a,b){
        if (a != "" && b == ""){
            return a/100;
        } else if (a != "" && b != ""){
            return 
        }
    }

    function operate(a, b, operator){
        switch (operator){
            case "+":
                addition(a,b);
                break;
            case "-":
                subtraction(a,b);
                break;
            case "*":
                multiplication(a,b);
                break;
            case "/":
                division(a,b);
                break;
        }
    }

});