console.log('Запуск по умолчанию');
console.log('___________________');
beerOnTheWall();
console.log('\n\n\n');
console.log('Запуск со значением 33');
console.log('___________________');
beerOnTheWall(33);

function beerOnTheWall(bottles = 5){
    if(bottles > 99){
        bottles = 99;
    }
    for(let i = bottles; i > 0; i--){
        let numOfBottles = i;
        let text = setText(numOfBottles);
        console.log(`${numOfBottles} ${text} пива на стене`);
        console.log(`${numOfBottles} ${text} пива!`);
        console.log('Возьми одну, пусти по кругу');
        if(numOfBottles - 1 == 0){
            console.log('Нет больше бутылок на стене!')
        }else{
            text = setText(numOfBottles - 1);
            console.log(`${numOfBottles - 1} ${text} пива на стене!\n\n\n`);
        }
    }
}

function setText(numOfBottles){
    if(numOfBottles == 1 || numOfBottles > 20 &&(numOfBottles % 10 == 1)){
        return 'бутылка';
    }else if(numOfBottles < 5 || numOfBottles > 20 && (numOfBottles % 10 < 5 && numOfBottles % 10 != 0)){
        return 'бутылки';
    }else{
        return 'бутылок';
    }
}