function imprimirSoma (a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) // sem atribuir valores iniciais e sem um ou ambos parametros a variavl será considerada undefined

function soma(a, b=0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))  