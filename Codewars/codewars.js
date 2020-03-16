function doneOrNot(board){
    if(checkRows(board) && checkColumns(board) && checkRegions(board)){
        return 'Finished!';
    }else{
        return 'Try again!';
    }
}


function checkRows(arr){
    for(let i = 0; i < 9; i++){
        let temp = arr[i].slice();
        temp.sort();
        for(let j = 0; j < 9; j++){
            if(!checkUniqs(temp)){
                return false;
            }
        }
    }
    return true;
}

function checkColumns(arr){
    for(let i = 0; i < 9; i++){
        let temp = [];
        for(j = 0; j < 9; j++){
            temp.push(arr[j][i]);
        }
        if(!checkUniqs(temp)){
            return false;
        }
    }
    return true;
}


function checkRegions(arr){
    let countRegion = 1;
    for(let i = 0; i < 9; i+=3){
        let temp = [];
        for(let j = countRegion; j < 10; j++){
            temp.push(arr[i][j-1]);
            temp.push(arr[i+1][j-1]);
            temp.push(arr[i+2][j-1]);
            if(j != 0 && j % 3 == 0){
                break;
            }
        }
        if(!checkUniqs(temp)){
            return false;
        }
        if(i == 6 && countRegion < 7){
            countRegion += 3;
            i = -3; // необходимо для обнуления счётчика!
        }
    }
    return true;
}


function checkUniqs(arr){
    arr.sort();
    for(let j = 0; j < 9; j++){
        if(j+1 != arr[j]){
            return false;
        }
    }
    return true
}