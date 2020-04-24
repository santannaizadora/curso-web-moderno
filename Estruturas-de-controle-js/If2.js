function teste1(num){
    if(num>7) // Sem as chaves apenas a primeita sentença de código é considerada
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ //Não utilizar ponto e virgula com estruturas de controle
        console.log(num)
    }
}

teste2(5)
teste2(9)