
console.log(this === global)
console.log(this === module)

console.log(this === module.exports) // Fora de uma função this aponta para module.exports / exports
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //Em uma função this aponta para um escopo global
}

logThis()