class Aluno {
    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    calcularMedia(){
        return((this.nota1 + this.nota2))/2;
        
    }
}

let Aluno1 = new Aluno("João", 8.0, 10.0);

console.log(Aluno1);
console.log(`A média é: ${Aluno1.calcularMedia()}`)