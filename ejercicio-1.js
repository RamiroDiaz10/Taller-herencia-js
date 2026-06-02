class Empleado{
  
    constructor(nombre, cargo, salario ){
      this.nombre = nombre;
      this.cargo = cargo
      this.salario = salario;
      this.activo = true; 
    }
        presentarse(){
            return `Hola, mi nombre es: ${this.nombre}, y soy ${this.cargo}`;
        }

        clacularSalarioAnual(){
            return `Salario anual es: $ ${this.salario} X 12 = $ ${this.salario * 12 }`;
        }

        desactivar(){
            if(this.activo === true){
                this.activo = false;
                return "Empleado desactivado";
            }else {
                this.activo = true;
                return "Empleado activado";

            }
        }

        info(){
            return `Informacion del empleado:
            nombre:${this.nombre}
            cargo:${this.cargo}
            salario:${this.salario}
            activo:${this.activo}`;
        }
}
class Lider extends Empleado {

    constructor(nombre, salario, equipo){
        super(nombre, "lider de equipo", salario);
        this.equipo = equipo;
    }

    presentarEquipo (){
        return `♣ intgrantes del equipo: ${this.equipo.join(", ")}`
    }
    agregarMiembro(nombre){
        this.equipo.push(nombre);
        return `♠${nombre} fue agregado al equipo`
    }
   info(){
        return `${super.info()}
        personas a cargo: ${this.equipo.length}`;
    }
}

let empleado1 = new Empleado("Jotas", "gerente", 2000000);
let empleado2 = new Empleado("Tomas", "diseñador", 90000);
let empleado3 = new Empleado("Juan", "desarrollador", 600000);
let empleado4 = new Empleado("Pan", "contador", 700000);
let empleado5 = new Empleado("Jun", "analista", 400000);



console.log(empleado1.presentarse());
console.log(empleado2.presentarse());
console.log(empleado1.clacularSalarioAnual());
console.log(empleado1.info());
console.log(empleado1.desactivar());
console.log(empleado1.info());
console.log(empleado1.desactivar());
console.log(empleado1.info());

let lider1 = new Lider("Gerardo", 10000000, equipo1 = [] );
let lider2 = new Lider("Andres", 20000000, equipo2 = [] );

console.log(lider1.agregarMiembro(empleado1.nombre));
console.log(lider1.agregarMiembro(empleado2.nombre));
console.log(lider1.presentarEquipo());
console.log(lider1.clacularSalarioAnual());
console.log(lider1.desactivar());

console.log(lider1.info());

console.log(lider2.agregarMiembro(empleado3.nombre));
console.log(lider2.presentarEquipo());
console.log(lider2.info());
console.log(lider2.agregarMiembro(empleado4.nombre));
console.log(lider2.presentarEquipo());

let nomina = [];
nomina.push(empleado1);
nomina.push(empleado2);
nomina.push(empleado3);
nomina.push(empleado4);
nomina.push(empleado5);
nomina.push(lider1);
nomina.push(lider2);
console.log(nomina)

let total = 0;
for (let i = 0; i < nomina.length; i++){
    total = total + nomina[i].salario;
}
console.log(`Nomina mensual: $ ${total}`)
console.log(`Nomina anual: $ ${total * 12}`)









