const a = {name: 'Teste'}
console.log(a)

const b = a // como "a" é objeto, "a" e "b" irão apontar para o mesmo lugar da memória
console.log(b)

b.name = 'pkpk' // atribuindo um novo valor para "b", o espaço compartilhado na memória irá armazenar o novo valor, fazendo com que "a" também tenha seu valor alterado mesmo que a atribuição tenha sido feita em b

console.log(a)
console.log(b)

/////////////////////////////////////////

let valor // não iniciada
console.log(valor)

valor = null // valor não possui um endereço que aponta para um lugar na memória
console.log(valor)
//console.log(valor.toString) //Erro! 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco 
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)