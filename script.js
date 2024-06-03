document.addEventListener("DOMContentLoaded",function () {
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let multi = document.getElementById("*");
let divide = document.getElementById("/")
let modulo = document.getElementById("%");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four= document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight= document.getElementById("8");
let nine= document.getElementById("9");
let zero = document.getElementById("0");
let clr = document.getElementById("clear");
let deci = document.getElementById("decimal");

let reset = document.getElementById("reset");
let evaluate = document.getElementById("eval");

let display = document.getElementById("inputExpression");

var expr="";
function fun(event) {
    if (expr.length<21) {
        expr=expr+event.target.textContent;
    }
    
    display.textContent=expr;
}
function clearAll(event) {
    expr="";
    display.textContent=expr;
}
function clear(event) {
    expr=expr.slice(0,-1);
    display.textContent=expr;
}
function calculate(event) {
    try {
        expr= eval(expr);
        display.textContent=expr;
    } catch (error) {
        display.textContent="invalid expression! clear and try again.";
        expr="";
        
    }
}

reset.onclick=clearAll;
evaluate.onclick=calculate;
clr.onclick=clear;
deci.onclick=fun;
plus.onclick = fun;
minus.onclick=fun;
multi.onclick = fun;
divide.onclick=fun;
modulo.onclick = fun;
one.onclick = fun;
two.onclick=fun;
three.onclick = fun;
four.onclick=fun;
five.onclick = fun;
six.onclick = fun;
seven.onclick=fun;
eight.onclick = fun;
nine.onclick=fun;
zero.onclick = fun;
})
