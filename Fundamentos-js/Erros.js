function tratarErroELancar(erro){
    throw new Error ('erro')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally{ //sempre roda
        console.log('final')
    }
    
}

const obj = {nome: 'Roberto'} // variavel nome errada -> name
imprimirNomeGritado(obj)