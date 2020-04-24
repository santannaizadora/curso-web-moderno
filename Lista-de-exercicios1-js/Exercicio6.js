function jurosSimples(capitalINicial, juros, tempo){
    montante = capitalINicial + (capitalINicial*(juros/100)*tempo)
    return montante
}
console.log(jurosSimples(1200,2.5,10))

function jurosComposto(capitalINicial, juros, tempo){
    montante = capitalINicial * (Math.pow((1 + (juros/100)),tempo))
    return montante.toFixed(2)
    
}

console.log(jurosComposto(5000,1,6))