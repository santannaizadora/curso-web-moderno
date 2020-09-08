// Object.preventExtensions --> evita que o objeto seja extendido
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // nao pode ser adcionado
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // nao pode adicionar nem excluir atributos
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // nao sera adicionado
delete pessoa.nome // nao será excluido
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes