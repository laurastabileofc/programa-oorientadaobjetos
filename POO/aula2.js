class Conta{
    #dono
    #saldo
    #senha
    // quando criar uma conta o constructor vai executar
    constructor(dono)
    {
        this.#saldo = 1000;
        this.#senha = 1234;
        this.dono = dono
    }
    //get: retorna algo
    // set: atualizar algo

    get saldo()
    {
        return this.#saldo;
        if(this.#saldo <= 300)
            return this.#saldo
        else
            return "Valor impede demonstração"
    }

    set saldo(valor)
    {
        this.#saldo = valor;
    }

    sacar(valorSaque, senha){
        if ((this.#saldo - valorSaque) >= 0 && this.#senha == senha){
            this.#saldo -= valorSaque
        } else
            console.log('Sacar: Saldo insuficiente')
    }
    extrato(senha)
    {
        if(this.#senha == senha){
        console.log(`Extrato: Seu saldo é ${this.#saldo}`)
        }
    }
    depositar(valor, senha){
        if(this.#senha != senha){
            console.log('Depositar: Senha incorreta')
            return
        }
        if(valor < 0){
            console.log('Depositar: Não é possível fazer depósitos negativos')
            return;
        }
        if(valor > 5000){
            console.log('Depositar: Valor muito alto, vá até o caixa')
            return
        }
        this.#saldo += valor
    }

    dono(dono, senha){

    }

}

// Conta = classe ; minhaConta = instância
minhaConta = new Conta()
// minhaConta.saldo = 200
minhaConta.sacar(100, 1234)
// minhaConta.saldo -= 1000
// minhaConta.depositar(50000)

// console.log('Saldo:',minhaConta.saldo)
minhaConta.extrato(1234)


class Pessoa{
    #nome 
    #cpf 
    #dataNasc

    constructor(nome,cpf,dataNasc){
        this.nome = this.nome;
        this.#cpf = cpf;
        this.#dataNasc = dataNasc;
    }
}


pessoa1 = new Pessoa ('Laura', '12345','18')
console.log(pessoa1)
minhaConta.dono = pessoa1
console.log(minhaConta)