// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(x){
    cats.push(x);
}

function destructivelyPrependCat(x){
    cats.unshift(x);
}


function destructivelyRemoveLastCat(){
   cats.pop();
}


function destructivelyRemoveFirstCat(){
    cats.shift()
    }
    

function appendCat(x){
   let result = [...cats, x];
   return result;
}


function prependCat(x){
    let result = [x,...cats];
    return result;
   }

function removeLastCat(x){
    return cats.slice(0,-1);
}

function removeFirstCat(x){
return cats.slice(1);
}
