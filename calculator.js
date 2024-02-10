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