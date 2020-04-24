function calculaBissexto(ano){
    if(ano % 4 === 0 && ano > 0){
        return true
    }
    return false
}

    console.log(calculaBissexto(1))
    console.log(calculaBissexto(-4))
    console.log(calculaBissexto(800))
    console.log(calculaBissexto(2019))
    console.log(calculaBissexto(2020))
