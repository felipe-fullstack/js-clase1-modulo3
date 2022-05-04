class GatoAnimado {
    constructor (nombre, año, canalTV){
    this.name = nombre;
    this.age = año;
    this.channel = canalTV;
}
biografiaPersonaje(){
    console.log(this.name + " es un personaje muy extrovertido inagurado en el año: " + this.age  + " en el canal: " + this.channel + " por primera vez");
}
}

var personaje = new GatoAnimado("Gato Felix",1990,"TVN")

personaje.biografiaPersonaje()