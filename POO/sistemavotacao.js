
class Eleitor {
    // Atributos privados
    #nome
    #cpf
    #votou

    constructor(nome, cpf) {
        this.#nome = nome
        this.#cpf = cpf
        this.#votou = false // Inicialmente, não votou
    }

    // Getter: permite consultar o nome
    get nome() {
        return this.#nome
    }

    // Getter: informa se já votou
    get votou() {
        return this.#votou
    }

    // Método que marca o eleitor como votante
    registrarVoto() {
        this.#votou = true
    }
}

class Candidato {
    #nome
    #numero
    #votos

    constructor(nome, numero) {
        this.#nome = nome
        this.#numero = numero
        this.#votos = 0 // Começa sem votos
    }

    get nome() {
        return this.#nome
    }

    get numero() {
        return this.#numero
    }

    get votos() {
        return this.#votos
    }

    // Acrescenta um voto ao candidato
    receberVoto() {
        this.#votos += 1
    }
}

class SistemaVotacao {
    #eleitores
    #candidatos

    constructor() {
        // Arrays para guardar objetos
        this.#eleitores = []
        this.#candidatos = []
    }

    // Recebe um objeto Eleitor
    cadastrarEleitor(eleitor) {
        this.#eleitores.push(eleitor)
    }

    // Recebe um objeto Candidato
    cadastrarCandidato(candidato) {
        this.#candidatos.push(candidato)
    }

    // Recebe um eleitor e o número escolhido
    votar(eleitor, numero) {

        // Verifica se o eleitor foi cadastrado
        if (!this.#eleitores.includes(eleitor)) {
            console.log("Eleitor não cadastrado")
            return
        }

        // Impede que o eleitor vote novamente
        if (eleitor.votou) {
            console.log("Este eleitor já votou")
            return
        }

        // Percorre os candidatos cadastrados
        for (let candidato of this.#candidatos) {

            // Procura o número escolhido
            if (candidato.numero === numero) {

                // Acrescenta um voto ao candidato
                candidato.receberVoto()

                // Marca o eleitor como votante
                eleitor.registrarVoto()

                console.log("Voto registrado com sucesso")
                return
            }
        }

        // Executado se nenhum candidato corresponder
        console.log("Candidato não encontrado")
    }

    exibirResultados() {
        console.log("--- RESULTADOS ---")

        // Exibe os votos de cada candidato
        for (let candidato of this.#candidatos) {
            console.log(
                `${candidato.nome}: ${candidato.votos} voto(s)`
            )
        }
    }
}

// =====================================
// FORA DAS CLASSES: CRIAÇÃO DOS OBJETOS
// =====================================

// Criando o sistema
const sistema = new SistemaVotacao()

// Criando candidatos
const candidato1 = new Candidato("Ana", 10)
const candidato2 = new Candidato("Pedro", 20)

// Criando eleitores
const eleitor1 = new Eleitor("Maria", "111")
const eleitor2 = new Eleitor("João", "222")
const eleitor3 = new Eleitor("Carlos", "333")

// Cadastrando os candidatos no sistema
sistema.cadastrarCandidato(candidato1)
sistema.cadastrarCandidato(candidato2)

// Cadastrando os eleitores
sistema.cadastrarEleitor(eleitor1)
sistema.cadastrarEleitor(eleitor2)
sistema.cadastrarEleitor(eleitor3)

// Registrando votos
sistema.votar(eleitor1, 10) // Maria vota em Ana
sistema.votar(eleitor2, 20) // João vota em Pedro
sistema.votar(eleitor3, 10) // Carlos vota em Ana

// Tentativa de votar novamente
sistema.votar(eleitor1, 20)

// Exibindo os resultados
sistema.exibirResultados()
