function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook',3090.99))
console.log(criarProduto('Ipad',2050.50))
