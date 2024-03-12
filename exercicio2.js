class Casa {
    constructor(endereco, numeroQuartos, area) {
        this.endereco = endereco;
        this.numeroQuartos = numeroQuartos;
        this.area = area;
    }
    InformacoesCasa(){
        return(console.log(this.endereco, this.numeroQuartos, this.area))
    }
}

let Casa1 = new Casa("rua 11 de agosto", 4, "500000cm");

console.log(Casa1);
console.log(` ${Casa1.InformacoesCasa()}`);

