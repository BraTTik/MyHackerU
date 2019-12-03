export default function priceSortSwitcher(value){
    switch(value){
        case 'TO_HIGH':
            return function(a,b){
                return a.price - b.price;
            }
        case 'TO_LOW':
            return function(a,b){
                return b.price - a.price;
            }
        default:
            return null;
    }

}