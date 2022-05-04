class Auto {
    constructor (marca, modelo, tipo, año, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.año = año;
    this.precio = precio;
}
}

var automovil = new Auto("Toyota","Hilux","Camioneta 4x4",2010,15000000);

automovil.color = "rojo";
delete automovil.color;

console.log(automovil);