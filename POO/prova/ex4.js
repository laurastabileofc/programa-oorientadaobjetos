// Exercício — Sistema de funcionários

// Crie uma classe chamada Funcionario com os seguintes requisitos:
// 1. Atributos privados #nome e #salario.
// 2. Construtor que receba o nome e o salário inicial.
// 3. Getter salario que retorne o salário atual.
// 4. Setter salario que permita alterar o salário, mas impeça valores menores ou iguais a zero.
// 5. Método aumentarSalario(valor) que acrescente um valor ao salário atual, desde que seja positivo.
// 6. Método exibirFuncionario() que mostre o nome e o salário.
// Fora da classe:
// - Crie um funcionário chamado Carlos com salário de R$ 2.000.
// - Consulte o salário usando o getter.
// - Altere o salário para R$ 2.500 usando o setter.
// - Acrescente R$ 500 usando o método aumentarSalario().
// - Tente atribuir um salário de -100 usando o setter.
// - Exiba os dados finais do funcionário.

class Funcionario{
    #nome
    #salario 

    constructor(nome, salario){
        this.#nome = nome 
        this.#salario = salario 
    }

    get salario(){
        return this.#salario
    }

    set salario(valor){
        if (valor <= 0){
            console.log('Valor inválido')
            return
        }
        
        this.#salario = valor
    }

    aumentarSalario(valor){
        if (valor <= 0){
            console.log('Valor inválido')
            return
        } 
        this.#salario += valor
    }

    exibirFuncionario(){
        console.log(`Funcionário: ${this.#nome}`)
        console.log(`Salário final: R$${this.#salario}`)
    }
}

const funcionario1 = new Funcionario('Carlos', 2000)

console.log(funcionario1.salario) //getter

funcionario1.salario = 2500

funcionario1.aumentarSalario(500)

funcionario1.salario = -100

funcionario1.exibirFuncionario()

