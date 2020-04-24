function Divisão(dividendo,divisor){
    resultado = Math.floor(dividendo/divisor)
    resto = dividendo - (resultado*divisor)

    return `resultado: ${resultado}, resto: ${resto}`
}

console.log(Divisão(5,2))
console.log(Divisão(4,2))
console.log(Divisão(50,2))
console.log(Divisão(25,2))