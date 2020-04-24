const valor = 'global'
function minhafuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhafuncao() // procura variavel no escopo em que foi definida
}

exec()