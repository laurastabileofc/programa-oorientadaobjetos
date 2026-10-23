// Crie uma classe chamada Produto que represente os produtos de uma loja.
// Requisitos:
// 1. A classe deve possuir os atributos nome, preco e quantidade.
// 2. Crie um constructor que receba esses três valores e inicialize os atributos.
// 3. Crie um método chamado exibirProduto() que apresente o nome, o preço e a quantidade no console.
// 4. Instancie dois produtos diferentes.
// 5. Execute o método exibirProduto() para os dois objetos.

class Produto{
    nome
    preco
    quantidade

    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    exibirProduto(){
        console.log(`Produto: ${this.nome} Preço: ${this.preco} Quantidade: ${this.quantidade}`)
    }
}

produto1 = new Produto('Mouse', 10, 3)
produto2 = new Produto('Teclado', 50, 1)

produto1.exibirProduto()
produto2.exibirProduto()