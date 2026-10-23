console.log("Hello world!")

let nome = "Isabelli"
const sobrenome = "Chagas"

// console.log(`hello, ${nome}`)

function somar(a,b){
    return a+b
}

// console.log(somar(2,4))

class Pessoa
{
    id
    nome
    sobrenome
    cpf

    constructor(nome, sobrenome, cpf, id) // é executado quando uma nova Pessoa é criada - instanciada
    {
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.id = id
    }


    apresentar()
    {
        console.log(`Meu nome é ${this.nome} e meu cpf é ${this.cpf}`)
    }
    
}

cliente = new Pessoa("isa", "chagas", "1111111", 1);
// cliente.nome = "isa"
// cliente.sobrenome = "chagas"
// cliente.cpf = "1111111111"
// cliente.id = 1

cliente2 = new Pessoa()
cliente2.nome = "novo"
cliente2.cpf = "12332434"
cliente2.sobrenome = "sobrenome 1"
cliente2.id = 2

cliente.apresentar()
// console.log(cliente2)