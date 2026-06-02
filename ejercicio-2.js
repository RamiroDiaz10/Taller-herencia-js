class Contenido {
    constructor(titulo, genero, anio){
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    ficha(){
        return `Titulo: ${this.titulo} \n Genero: ${this.genero} \n anio: ${this.anio} \n Disponible: ${this.disponible}`
    }

    retirar(){
        if(this.disponible === true){
                this.disponible = false;
                return `Contenido deshabilitado`;
            }else {
                this.disponible = true;
               return `Contenido activado`;

            }
    }

    estado(){
        
    return this.disponible
        ? "Contenido disponible"
        : "Contenido no disponible";

    }
}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;

    }
    duracionFormateada(){
        let tiempoH = Math.floor(this.duracion / 60);
        let tiempoM = Math.floor(this.duracion % 60);
        return `Duracion: ${tiempoH}h ${tiempoM}m `;
    }

    ficha(){
        return `${super.ficha()} \n ${this.duracionFormateada()}, \n duracion: ${this.duracion} m`;
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas){
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }
    registrarEpisodios(cantidad){
        this.episodiosPorTemporada = this.episodiosPorTemporada + cantidad;
        return `♥ Episodios registrados: ${this.episodiosPorTemporada}`
    }

    totalEpisodios(){
        return `♠ El total de episodios es: ${this.episodiosPorTemporada * this.temporadas}`
    }

    ficha(){
        return ` ${super.ficha()}, \n Total temporadas: ${this.temporadas}, \n ${this.totalEpisodios()}`
    }
}

let pelicula1 = new Pelicula("el aro", "comedia", 2000, 120 );
let pelicula2 = new Pelicula("Sasa", "comedia", 2020, 150 );
let pelicula3 = new Pelicula("Cantinflas", "accion", 1965, 200);

console.log(pelicula1.duracionFormateada());
console.log(pelicula1.ficha());
console.log(pelicula1.retirar());
console.log(pelicula1.estado());
console.log(pelicula1.ficha());
console.log(pelicula2.ficha());

let serie1 = new Serie("Avengers", "accion", 2000, 6 );
let serie2 = new Serie("Avengers", "accion", 2000, 6 );
let serie3 = new Serie("Avengers", "accion", 2000, 6 );

console.log(serie1.ficha());
console.log(serie1.registrarEpisodios(5));
console.log(serie1.ficha());
console.log(serie1.retirar());
console.log(serie1.totalEpisodios());
console.log(serie1.estado());
console.log(serie1.retirar());
console.log(serie1.estado());










