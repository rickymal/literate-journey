class Pessoa {
    constructor(nome) {
        if (nome === undefined || nome.length <= 0){
            throw new Error("Passar parametro");
        }
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

export default Pessoa;