class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log("Som genérico do animal");
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log("Au au");
    }

    mostrarInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log("Miau");
    }

    mostrarInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cor: ${this.cor}`);
    }
}

const cachorro1 = new Cachorro("Rex", 3, "Labrador");
const gato1 = new Gato("Felix", 2, "Branco");
const cachorro2 = new Cachorro("Bolinha", 5, "Vira-lata");

cachorro1.emitirSom();
gato1.emitirSom();
cachorro2.mostrarInfo();
