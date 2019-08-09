/* var list = prompt('Введите список продуктов через запятую');

var arr = list.split(', ');

console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length -1]); */
/* var num = prompt('Введите число');

if(isNaN(num)){
    alert("Нужно ввести число!");
}else{
    for(var i = 2 ; i <= num; i++){
        console.log(i ** 2);
    }
} */

var movies = [];

do{
    var i = prompt('Введите свой любимый фильм или 0 для конца ввода');
    if(i != '' || i != 0){
        movies.push(i);
    }
}while(i != 0);

for(var i = 0; i < movies.length; i++){
    console.log(movies[i]);
}

console.log("В обратном порядке");

for(var i = movies.length - 1; i >= 0; i--){
    console.log(movies[i]);
}

console.log("Ёлочка");

while(movies.length != 0){
    console.log(movies.join(', '));
    movies.pop();
}