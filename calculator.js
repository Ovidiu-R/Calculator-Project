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
                opData[0] += button.id;
                break;
            case button.classList.contains('num') && opData.length >= 2:
                opData[2] += (button.id);
                break;
            case button.classList.contains('num') && opData.
        }
    }

    function addition(){
          
    }

    function subtraction(){
        
    }

    function multiplication(){
       
    }

    function division(){
        

    }

    function percent(){
        
    }

    function operate(){
       
    }

    function reset(){
        
    }

    function undo(){

    }

});