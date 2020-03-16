// var name = prompt('Как тебя зовут?');

// alert(`Привет, ${name}`); 

/* var a = prompt('Введите первое число');
var b = prompt('Введите второе число');

if(isNaN(a) || isNaN(b) || !a || !b){
    alert('Вы ввели неправильные данные');
}else{
    var aNum = Number(a);
    var bNum = Number(b);
    if(aNum > bNum){
        console.log('aNum больше b');
    }else if(aNum < bNum){
        console.log('a меньше b');
    }else{
        console.log('a и b равны');
    }
} */

var age = prompt('Введите свой возраст');

if(isNaN(age) || age < 0 || !age){
    alert('Введите корректные данные');
}else{
    var ageNum = Number(age);
    var min = age*365*24*60;
    if(age >= 0 && age < 18){
        alert(`Вы ещё ребёнок.\nВам ${min} минут.`);
    }else if(age >= 18 && age < 55){
        alert(`Вы взрослый человек.\nВам ${min} минут.`);
    }else if(age >= 55 && age <= 150){
        alert(`Вы уже почтенного возраста.\nВам ${min} минут.`);
    }else{
        alert(`Похоже Вы бессмертный.\nВам ${min} минут.`);
    }
}