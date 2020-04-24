{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // fora de um escopo de função, a variavel var pode ser vista fora de seu bloco

function teste(){
    var local = 123
    console.log(local)
} 
teste()
//console.log(local) //variaveis declradas dentro de uma fução é vista somente dentro da função

//Variaveis declaradas com var possuem apenas escopo global e de funçao