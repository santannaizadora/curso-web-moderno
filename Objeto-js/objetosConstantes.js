const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'

console.log(pessoa)

/*
###NÃO É POSSÍVEL ATRIBUIR UM NOVO OBJETO A CONSTANTE###
pessoa = {nome = 'Ana'}
console.log(pessoa)

*/

Object.freeze(pessoa) //"ignora" tentativas de novas atribuições ao objeto -> não exclui, adiciona ou altera atributos de um objeto
pessoa.nome = 'Maria'
console.log(pessoa.nome)