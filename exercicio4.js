class Celular {
    constructor(marca, modelo, armazenamento) {
        this.marca = marca;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
    }
    InformacoesCelular(){
        return(console.log(this.marca, this.modelo, this.armazenamento))
    }
}

let Celular1 = new Celular("samsung", "A11", 86);

console.log(Celular1);
console.log(` ${Celular1.InformacoesCelular()}`);