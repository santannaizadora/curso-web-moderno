var resultados = [20, 10 , 90, 101, 15, 60, 45, 30]

function comparaPontos(resultados){
    let piorPontuacao = resultados[0]
    let melhorJogo = resultados[0]
    let quebraRecord = 0
    let piorJogo = 1

    for(let i = 1; i < resultados.length; i++){
        if(resultados[i] > melhorJogo){
            melhorJogo = resultados[i]
            quebraRecord++
    } else if(resultados[i]< piorPontuacao){
        piorPontuacao = resultados[i]
        piorJogo = i+1
        }
    }
return [quebraRecord, piorJogo]
}
console.log(comparaPontos(resultados))

