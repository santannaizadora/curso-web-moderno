
function arredondaNota(nota){
    let arredonda
    if(nota<38){
        arredonda = nota
    } else if(nota % 5 > 2){
        arredonda = nota + (5 - (nota%5))  
    } else{
        arredonda = nota
    }
    return arredonda
}

function aprovaAluno(nota){
    novaNota = arredondaNota(nota)
    if (novaNota>=40){
        console.log('Aprovado com: ',novaNota)
    } if(novaNota<40){
        console.log('Reprovado com: ',novaNota)
    }
    
}

aprovaAluno(38)
aprovaAluno(54)
aprovaAluno(90)
aprovaAluno(29)