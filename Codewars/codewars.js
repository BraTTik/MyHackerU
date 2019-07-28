dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);



function dirReduc(arr){
    let directions = {NORTH:1, SOUTH:-1, WEST:2, EAST:-2};
    for(let i = 0; i < arr.length; i++){
        if(i < arr.length-1 && directions[i] + directions[arr[i+1]] == 0){
        console.log(true);
        arr.splice(i, 2);
        i=0;
        }
    }
    return arr;
}    
