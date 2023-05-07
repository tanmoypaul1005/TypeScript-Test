class Player {
    private name: string
    readonly age: number

    constructor(a: string, b: number) {
        this.name = a;
        this.age = b;
    }

    play() {
        console.log("I'm " + this.name + " and I'm " + this.age + " years old.")
    }
}

const abid=new Player("Abid",20)

const Palyers: Player[]=[]