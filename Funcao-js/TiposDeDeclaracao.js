//function declaration -> pode ser chamada antes de sua declaração
console.log(soma(1,3))
function soma(x,y){
    return x + y
}

//function expression 
const sub = function (x, y){
    return x - y
}
console.log(sub(1,3))

//named function expression
const mult = function mult(x,y){
    return x * y
}
console.log(mult(1,3))