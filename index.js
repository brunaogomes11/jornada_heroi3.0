class Heroi {
    constructor(nome, idade, tipo) {
       this.nome = nome;
       this.idade = idade;
       this.tipo = tipo.toLowerCase();
    }

    atacar() {
        let ataque = 'Sem tipo'
        if (this.tipo == 'mago') {
            ataque = 'magia'
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        } else if (this.tipo == 'guerreiro') {
            ataque = 'espada'
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        } else if (this.tipo == 'monge') {
            ataque = 'artes marciais'
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        } else if (this.tipo == 'ninja') {
            ataque = 'shuriken'
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        }
    }
}

const mago = new Heroi("Maguinho de meia tigela", 13, 'mago');
mago.atacar();
const guerreiro = new Heroi("Bart Simpson", 13, 'guerreiro');
guerreiro.atacar();
const ninja = new Heroi("Naruto uzukrak", 13, 'ninja');
ninja.atacar();