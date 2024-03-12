class Empresa {
    constructor(nome,receiraAnual, despesasAnuais ) {
        this.nome = nome ;
        this.receiraAnual = receiraAnual ;
        this.despesasAnuais = despesasAnuais ;
    }
    calcularLucroAnual(){
        return((this.despesasAnuais - this.receiraAnual)).toFixed(2)
    }

    exibirRelatorio(){
        return(console.log(this.nome, this.receiraAnual, this.despesasAnuais));
    }
}

let Empresa1  = new Empresa ("Americanas", 20000, 15000);
let Empresa2  = new Empresa ("Casas bahia", 40000, 50000);


console.log(Empresa1);
console.log(`O lucro anual é : ${Empresa1.calcularLucroAnual()}`);
console.log(`O relatorio é : ${Empresa1.exibirRelatorio()}`);

console.log(Empresa2);
console.log(`O lucro anual da empresa 2 é : ${Empresa2.calcularLucroAnual()}`);
console.log(`O relatorio da empresa 2  é : ${Empresa2.exibirRelatorio()}`);