class Player {

    constructor(
        private name: string,
        readonly age: number
    ) { }

    play() {
        console.log("I'm " + this.name + " and I'm " + this.age + " years old.")
    }
}

const abid = new Player("Abid", 20)

const Palyers: Player[] = []