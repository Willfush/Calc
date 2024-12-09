const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let isResault = false;

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const value = button.value;

        if(value === '='){
            display.value = eval(display.value);
            isResault = true;
            console.log(isResault)
        }else if(value === 'C'){
            if(display.value.length > 1){
                display.value = display.value.slice(0, -1)
            }else if(display.value.length <= 1){
                display.value = ''
            }
        }else if(value === 'AC'){
            display.value = ''
        }else if(value === 'u'){
            display.value = Number(display.value) / 100;
        }else if((value === '0' || value === '00' || value === '1' || value === '2' || value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8' || value === '9') && isResault === true){
            display.value = '';
            display.value = value;
            isResault = false;
        }else if (value === '+' || value === '-' || value === '*' || value === '/' || value === 'AC' || value === 'u' || value === 'C'){
            display.value += value;
            isResault = false;
        }else{
            display.value += value
        }
    })
});
