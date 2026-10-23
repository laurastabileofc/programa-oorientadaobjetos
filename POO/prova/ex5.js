class Leitor{
    #nome 

    constructor(nome){
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }

    criarCarteirinha(){
        return new Carteirinha(this)
        // crie uma nova carteirinha para esse leitor
    }
}

class Carteirinha{
    #leitor 
    #numero 

    constructor(leitor){
        this.#leitor = leitor 
        this.#numero = 100
    }

    exibirCarteirinha(){
        console.log(`Nome: ${this.#leitor.nome}`)
        console.log(`Número da carteirinha: ${this.#numero}`)
    }
}

const leitor1 = new Leitor('Ana')
const carteirinha1 = leitor1.criarCarteirinha()

carteirinha1.exibirCarteirinha()