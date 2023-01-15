const calculator = document.querySelector("#calculator");
const input = document.querySelector("input");

let btnValues = {
    "zero" : '0',
    "one" : '1',
    "two" : '2',
    "three" : '3',
    "four" : '4',
    "five" : '5',
    "six" : '6',
    "seven" : '7',
    "eight" : '8',
    "nine" : '9',
    "plus" : '+',
    "minus" : '-',
    "multiply" : '*',
    "divide" : '/',
    "point" : '.',
    "equal" : '=',
}

function getBtnValue(btnID){
    return btnValues[btnID];
}

let operator = '', answer = 0;
let expr = input.getAttribute('value');
let displayValue = '';

calculator.addEventListener('click', function(e){
    if(e.target.classList.contains('num') || e.target.classList.contains('operator') || 
    e.target.classList.contains('point')){
        if(e.target.getAttribute('id')==='multiply'){
            expr += '*';
            displayValue += 'x';
            input.setAttribute("value", displayValue )
        }
        else{
            expr += btnValues[e.target.getAttribute("id")];
            displayValue += btnValues[e.target.getAttribute("id")];
            input.setAttribute("value", displayValue )
        }
    }
    if(e.target.getAttribute("id") == 'equal'){
        if(expr === ''){
        input.setAttribute("value", '0');
        }
        else{
            answer = eval(expr);
            input.setAttribute("value", answer )
        }
    }
    if(e.target.getAttribute("id")==="ac"){
        nums = [];
        currentNum = 0;
        answer = 0;
        input.setAttribute('value', answer);
        displayValue = expr = '';
        console.log(expr);
    }
});