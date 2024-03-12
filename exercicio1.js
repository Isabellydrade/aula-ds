class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularTotal(){
        return((this.preco * this.quantidade)).toFixed(2)
    }
}

let Produto1 = new Produto("Detergente", 20, 4);

console.log(Produto1);
console.log(`O valor total é: ${Produto1.calcularTotal()}`);