class Conta {
    #titular
    #saldo
    #senha

    constructor(titular, senha) {
        this.#titular = titular
        this.#senha = senha
        this.#saldo = 0
    }

    depositar(valor, senha) {
        if (senha !== this.#senha || valor <= 0) {
            console.log("Depósito inválido")
            return
        }

        this.#saldo += valor
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
        return true
    }

    depositoViaBC(valor) {
        this.#saldo += valor
    }

    exibirSaldo() {
        console.log(`${this.#titular}: R$ ${this.#saldo}`)
    }
}

class centralTransferancias{
    static transferir(origem,destino,valor,senha){
        if(origem.sacar(valor,senha)){
            destino.depositoViaBC(valor)
            console.log('Transferência realizada')
        }
        else{
            console.log('Transferência não realizada')
        }
    }
}

const conta1 = new Conta('Carlos', '1111')
const conta2 = new Conta('Mariana', '2222')

conta1.depositar(800, '1111')
conta2.depositar(200, '2222')

centralTransferancias.transferir(conta1,conta2,300,'1111')

centralTransferancias.transferir(conta2,conta1,600,'2222')

conta1.exibirSaldo()
conta2.exibirSaldo()