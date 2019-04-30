class Animale{
    tipo;
    constructor(tipo) {
        this.tipo = tipo;
        return this;
    }
    }
var persona= new Persona();
console.log(persona);
class Cane extends Animale{
    constructor(){
        super("canide");
    }
}