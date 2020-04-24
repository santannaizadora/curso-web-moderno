const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 80000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'rua abc',
            numero: 456
        }
    },
    condutores:[{
        nome: 'junior',
        idade:19
    }, {
        nome: 'ana',
        idade:42
    }]  
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'

console.log(carro)

delete carro.proprietario.endereco
console.log(carro)