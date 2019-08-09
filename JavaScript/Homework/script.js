var num1 = prompt('Введите первое число');
var num2 = prompt('Введите второе число');
var mathOperator = prompt('Введите математический оператор\n(Например, +, -, / или *');

var x;
var y;

if(isNaN(num1) || isNaN(num2) || !num1 || !num2){
    alert('Введите корректные числа!');
}else{
    x = Number(num1);
    y = Number(num2);
}

if((mathOperator != '+' && mathOperator != '-' && mathOperator != '/' && mathOperator != '*') || !mathOperator){
    alert('Введите корректный математический оператор!');
}else if(mathOperator == '+'){
    alert(`${x} + ${y} = ${x+y}` );
}else if(mathOperator == '-'){
    alert(`${x} - ${y} = ${x-y}` );
}else if(mathOperator == '/'){
    if(y != 0){
        alert(`${x} / ${y} = ${x/y}` );
    }else{
        alert('На ноль делить нельзя!')
    }
}else if(mathOperator == '*'){
    alert(`${x} * ${y} = ${x*y}` );
};