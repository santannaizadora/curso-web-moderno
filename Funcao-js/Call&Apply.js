function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4000,
    desc: 0.15,
    getPreco
}

console.log(getPreco.call(produto)) //aplicou somente desconto
console.log(getPreco.apply(produto)) // aplicou somente desconto

console.log(getPreco.call(produto, 0.17,'$')) //aplicou desconto e imposto
console.log(getPreco.apply(produto,[0.17,'$'])) // aplicou  desconto e imposto, apply precisa que os parametros sejam passados em um array
