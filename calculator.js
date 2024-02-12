document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const display1 = document.getElementById('primaryDisplay');
    const display2 = document.getElementById('secondaryDisplay');
    let operator = "";
    let a = "";
    let b = "";

    buttons.forEach (button => {
        button.addEventListener('click', () => {
            buttonHandler(button);
        });
    });

    function buttonHandler(button) {
        switch (true){
            case (button.classList.contains ('num') && operator === ""):
                  a += button.id;
                  display1.textContent = a;
                  break;
            case (button.classList.contains ('num') && operator !== ""):
                  b += button.id;
                  display1.textContent = (a + operator + b);
                  break;
            case (button.classList.contains ('op') && b === ""):
                  operator = button.textContent;
                  display2.textContent = a + operator;
                  break;
            case (button.classList.contains ('op') && b !== ""):
                  if (button.id === "percent") {
                    percent();
                  } else{
                  operate();
                  break;
                  }
            case (button.id === 'ac'):
                  reset();
                  break;
            case (button.id === 'del'):
                  undo();
                  break;
            case (button.id === 'equals'):
                  if (a !== "" && b!== "" && operator !== ""){
                    operate();
                    // reset();
                    break;
                  } else {
                    break;}
                  
        }
    }

    function addition(){
        display1.textContent = a + b;
        a = a + b;
        b = "";    }

    function subtraction(){
        display1.textContent = a - b;
        a = a - b;
        b = "";
    }

    function multiplication(){
        display1.textContent = a * b;
        a = a * b;
        b = "";
    }

    function division(){
        display1.textContent = a / b;
        a = a / b;
        b = "";

    }

    function percent(){
        if (a !== "" && b === ""){
            a = a/100
            display1.textContent = a;
        } else if (a !== "" && b !== ""){
            b = b/100;
            display1.textContent = a + operator + b;
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