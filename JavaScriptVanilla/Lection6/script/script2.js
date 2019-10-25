let data = [
    {
        name:"Димка",
        lastName:'Фамилиев',
        age: 16
    },
    {
        name:"Толян",
        lastName:'Фамилиев',
    },
    {
        name:"Колян",
        lastName:'Фамилиев',
        age: 44
    },
    {
        name:"Ольга",
        lastName:'Фамилиев',
        age: 75
    },
    undefined
]

data.forEach(function(elem, index){
    try{
        console.log('name: ' + elem.name);
        console.log('lastName: ' + elem.lastName);
        console.log('age: ' + elem.age);

    }catch(e){
        console.log(`упал на ${index} итерации`);
        console.log(e);
    }finally{
        console.log('________________');
        console.log('________________');
        console.log('________________');
    }
})