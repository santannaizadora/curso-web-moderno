const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa) //bind resolve o problema com o this 
falarDePessoa()