// Crie uma classe chamada Estoque para controlar a quantidade de produtos disponíveis em uma loja.
// Requisitos:
// 1. Declare os atributos privados #produto e #quantidade.
// 2. Crie um constructor que receba o nome do produto e a quantidade inicial.
// 3. Crie um getter chamado quantidade que retorne a quantidade disponível.
// 4. Crie um método adicionar(valor) que aumente a quantidade em estoque.
// 5. O método deve impedir a adição de valores negativos ou iguais a zero.
// 6. Crie um objeto com o produto "Mouse" e quantidade inicial 10.
// 7. Adicione 5 unidades e exiba a quantidade final utilizando o getter.


class Estoque{
    #produto
    #quantidade 

    constructor(produto,quantidade){
        this.#produto = produto
        this.#quantidade = quantidade
    }

    get quantidade(){
        return this.#quantidade
    }

    adicionar(valor){
        if(valor < 0){
            console.log('Valor inválido')
            return
        }

        if(valor==0){
            console.log('Valor inválido')
            return
        }

        this.#quantidade += valor
    }


    exibirEstoque(){
        console.log(`Produto: ${this.#produto}`)
        console.log(`Quantidade: ${this.#quantidade}`)
    }
}

const produto1 = new Estoque('Mouse', 10)

console.log(produto1.quantidade)

produto1.adicionar(5)

produto1.exibirEstoque()

produto1.adicionar(-1)

produto1.exibirEstoque()