const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let isResult = false;
let isOperator = false;

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const value = button.value;

            // Result
        if(value === '='){
            display.value = eval(display.value.replace(/×|,/g, doesMatch => doesMatch === '×' ? '*' : '.'));
            isResult = true; 
        }
        
            // aesthetics for   * -> X
        else if(value === '*'){
            display.value += '×';
            isResult = false;
        }

            // aesthetics for . -> ,
        else if(value === '.'){
            display.value += ',';
            isResult = false;
        }

            // Delete 1 digit
        else if(value === 'C'){
            if(display.value.length > 1){
                display.value = display.value.slice(0, -1)
            }else if(display.value.length <= 1){
                display.value = ''
            }

            // Deletes all digits
        }else if(value === 'AC'){
            display.value = ''
        }
        
            // Useless /100
        else if(value === 'u'){
            display.value = Number(display.value) / 100;
        }
        
            // Deletes the result if a number is pressed and displays the pressed digit
        else if((value === '0' || value === '00' || value === '1' || value === '2' || value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8' || value === '9') && isResult === true){
            display.value = '';
            display.value = value;
            isResult = false;
        }

            // Can place an operator after a result and restore the possibility to digit other numbers
        else if((value === '+' || value === '-' || value === '/' || value === '.') && isResult === true){
            display.value += value;
            isResult = false;
        }
        
            // Displays the current value
        else{
            display.value += value;
        }

        
    })
});



