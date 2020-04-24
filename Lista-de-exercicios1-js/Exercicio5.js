function formato(valor){
    return `R$ ${valor.toFixed(2).replace('.',',')}`
    
}

console.log(formato(0.3000000000000000000003))