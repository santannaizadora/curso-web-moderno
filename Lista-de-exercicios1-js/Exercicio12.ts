function fatorial(numero: Number): number{
    let fatorial: number = 1
    if(numero === 0){
        return 1
    }  else{
        for( let i = 2; i<=numero; i++){
            fatorial *= i
        }
        return fatorial
    }
}

console.log(fatorial(0))