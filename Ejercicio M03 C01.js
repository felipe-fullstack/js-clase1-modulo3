class Libro {
    constructor (nombre, autor, editorial, genero){
        this.name = nombre;
        this.author = autor;
        this.editorial = editorial;
        this.genero = genero;
    }
    mostrarLibro(){
        console.log(this.name + this.author + this.editorial + this.genero);
    }
    filtrarPorAutor(a){
       console.log(a)
    }
}

var libro = new Libro("Señor de los anillos"," JJ Tolkien "," Sol y Luna "," Thriller ");
var libro2 = new Libro("Bajo la luna","Miguel de Onamuno","Sal y Mar","Drama");
var libro3 = new Libro("Filo infinito","Isabel Allende"," Agua y Tierra","Comedia");

//libro.mostrarLibro();

var arregloLibro = [libro,libro2,libro3];
//console.log(arregloLibro)

//libro.filtrarPorAutor("Nombre del libro: " + libro.name + ", Autor: " + libro.author);
//libro2.filtrarPorAutor("Nombre del libro: " + libro.name + ", Autor: " + libro.author);
//libro3.filtrarPorAutor("Nombre del libro: " + libro.name + ", Autor: " + libro.author);

for (i = 0; i < arregloLibro.length; i++){
arregloLibro[i].filtrarPorAutor("Nombre del libro: " + arregloLibro[i].name + ", Autor: " + arregloLibro[i].author);
}