const funcs = []

for(let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//como let possui escopo de bloco, o valor de "i" será "respeitado" 