const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'hadhkad',
        numero:2
    }
}

const{nome, idade} = pessoa
console.log(nome, idade)

const{nome: n, idade: i} = pessoa
console.log(n, i)

// Ao tentar remover um atributo inexistente ele será dado como undefined
const{cabelo, humor} = pessoa
console.log(cabelo, humor)