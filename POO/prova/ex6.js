class ContaDigital{
    #titular 
    #saldo 
    #senha

    constructor(titular, senha){
        this.#titular = titular 
        this.#senha = senha
        this.#saldo = 0
    }

    validarSenha(senha){
        return senha === this.#senha
    }

    depositar(valor, senha){
        if (!this.validarSenha(senha)){
            console.log('Senha incorreta.')
            return false
        }
        if (valor<= 0){
            console.log('Não é possível realizar depósitos menores que zero.')
            return false
        }
        this.#saldo += valor
        return true
    }

    sacar(valor,senha){
        if (!this.validarSenha(senha)){
            console.log('Senha incorreta.')
            return false
        }
        if (valor<= 0){
            console.log('Não é possível realizar saques menores que zero.')
            return false
        }
        if (valor>this.#saldo){
            console.log('Saldo insuficiente.')
            return false
        }   
        this.#saldo -= valor
        return true
    }
    
    exibirSaldo(senha){
        if (!this.validarSenha(senha)){
            console.log('Senha incorreta.')
            return false
        }
        console.log(`${this.#titular}, seu saldo é R$${this.#saldo}`)
    }
}

const conta1 = new ContaDigital('Ana', '1234')

conta1.depositar(1000, '1234')
conta1.exibirSaldo('1234')
conta1.sacar(300, '1234')
conta1.exibirSaldo('1234')
conta1.sacar(800, '1234')
conta1.exibirSaldo('1234')
conta1.depositar(200, '000')
conta1.exibirSaldo('1234')