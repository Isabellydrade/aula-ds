class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }
    InformacoesFilme(){
        return(console.log(this.titulo, this.genero, this.duracao))
    }
}

let Filme1 = new Filme("Branca de neve", "Reencanto Juvenil", "90min");

console.log(Filme1);
console.log(` ${Filme1.InformacoesFilme()}`);