// Crie uma classe chamada Aluno que represente os estudantes de uma escola.
// Requisitos:
// 1. A classe deve possuir os atributos nome, nota1 e nota2.
// 2. Crie um constructor que receba e inicialize esses três atributos.
// 3. Crie um método calcularMedia() que calcule e retorne a média das duas notas.
// 4. Crie um método verificarSituacao() que utilize a média para determinar se o aluno está aprovado (média maior ou igual a 6) ou reprovado.
// 5. Instancie dois alunos: um aprovado e outro reprovado.
// 6. Execute o método verificarSituacao() para ambos.


class Aluno{
    nome
    nota1
    nota2

    constructor(nome,nota1,nota2){
        this.nome = nome
        this.nota1 = nota1 
        this.nota2 = nota2
    }

    calcularMedia(){
        const media = (this.nota1 + this.nota2) / 2
        return media
    }

    verificarSituacao(){
        const media = this.calcularMedia()
        if(media >= 6){
            console.log(`Aprovado.`)
        }
        else
            console.log(`Reprovado.`)
    }
}

aluno1 = new Aluno('laura', 10, 6)
aluno2 = new Aluno('sofia', 5, 5)

aluno1.verificarSituacao()
aluno2.verificarSituacao()