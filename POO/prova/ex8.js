class BancoCentral{
        static transferirValor(emitente, destino, valor, senha)
        //static indica qe o métoo pertence a essa classe 
        {        
            if(emitente.sacar(valor,senha)){
            destino.depositoViaBC(valor);
            emitente.registrarHistorico(`Transferência enviada de R$${valor}`)
        }
        }
}

class Conta {
    #titular
    #saldo
    #senha
    #historico

    constructor(titular, senha) {
        this.#titular = titular
        this.#senha = senha
        this.#saldo = 0
        this.#historico = []
    }

    depositar(valor, senha) {
        if (senha !== this.#senha || valor <= 0) {
            console.log("Depósito inválido")
            return
        }

        this.#saldo += valor
        this.#historico.push(`Depósito de R$${valor}`)
    }

    sacar(valor, senha) {
        if (senha !== this.#senha) {
            console.log("Senha incorreta")
            return false
        }

        if (valor <= 0 || valor > this.#saldo) {
            console.log("Saque inválido")
            return false
        }

        this.#saldo -= valor
        this.#historico.push(`Saque de R$${valor}`)
        return true
    }

    depositoViaBC(valor) {
        this.#saldo += valor
        this.#historico.push(`Transferência recebida de R$${valor}`)
    }

    exibirSaldo() {
        console.log(`${this.#titular}: R$ ${this.#saldo}`)
    }

    registrarHistorico(mensagem){
        this.#historico.push(mensagem)
    }

    exibirHistorico(){
        for(let item of this.#historico){
            console.log(item)
        }
    }
}

const contaAna = new Conta('Ana', '123')
const contaPedro = new Conta('Pedro', '456')

contaAna.depositar(500,'123')
contaAna.sacar(100,'123')

contaPedro.depositar(50,'456')

BancoCentral.transferirValor(contaAna,contaPedro,200,'123')

console.log("--- SALDOS ---")
contaAna.exibirSaldo()
contaPedro.exibirSaldo()

console.log("--- HISTÓRICO DE ANA ---")
contaAna.exibirHistorico()

console.log("--- HISTÓRICO DE PEDRO ---")
contaPedro.exibirHistorico()