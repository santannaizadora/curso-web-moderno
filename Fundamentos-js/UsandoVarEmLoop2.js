const funcs = []

for(var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//como a variavel nao possui escopo de bloco, todos os valores imprimidos será o valor que faz com que o loop termine 