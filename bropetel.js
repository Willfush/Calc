const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let isResult = false;

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const value = button.value;

            // Result
        if (value === '=') {
            display.value = eval(display.value.replace(/×|÷|,/g, doesMatch=> 
                doesMatch === '×' ? '*' : 
                doesMatch === '÷' ? '/' : 
                '.'
            ));
            isResult = true;
        }
            // aesthetics for   * -> X
        else if(value === '*'){
            if(display.value.slice(-1) !== '×'){
                display.value += '×';
                isResult = false;
            }
        }

            // aesthetics for . -> ,
        else if(value === '.'){
            if(display.value.slice(-1) !== ','){
                display.value += ',';
                isResult = false;
            }
        }

            // aesthetics for . -> ,
        else if(value === '/'){
            if(display.value.slice(-1) !== '÷'){
                display.value += '÷';
                isResult = false;
            }
        }

            // Delete 1 digit
        else if(value === 'C'){
            if(display.value.length > 1){
                display.value = display.value.slice(0, -1)
            }else if(display.value.length <= 1){
                display.value = '';
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
        else if((value >= '0' && value <= '9') && isResult === true){
            display.value = '';
            display.value = value;
            isResult = false;
        }

            // Can place an operator after a result and restore the possibility to digit other numbers
        else if((value === '+' || value === '-' || value === '/' || value === '.') && isResult === true){
            display.value += value;
            isResult = false;
        }
        
            // Can't place an operator next to another operator
        else if(['+', '-', '×', '÷'].includes(display.value.slice(-1)) && ['+', '-', '×', '÷'].includes(value)){
            display.value += '';
        }

            // Displays the current value
        else{
            display.value += value;
        }
    })
});
