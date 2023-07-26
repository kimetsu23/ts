// tsc para correr de ts a js

// para mirar el js: node el nombre de la carpeta/index.js examplo js/index.js

let mensaje: string = "hola mundo";

mensaje = "chanchito feliz";

mensaje = "chao mundo"
console.log(mensaje)

/**
 * Tipos de js
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * 
 * Tipos de TS
 * any. no usarlo, evitarlo.
 * unknowm
 * never
 * arrays
 * tuplas
 * enums
 * 
 * Tipos inferidos. que ts es inteligente para saber que tipo de variables
 */

// por defecto sabe que tipo de inferido es 
let trujillo: number = 1876
let nombre = "leonisdas"
let real = true

// let evitarl
// evitarl = "chenchi"
// evitarl = 23

// no es una buena practica, pero despues que uses el inferido any, cuando termines le pones el valor correpondiete
function chanchito(config: any) {
    return config

}

// Arreglos

// no usando el inferido de ts
let animale = ['chanchi', 'oso', 'mani']

// usando el inferido de ts
let animales: string[] = ['chanchi', 'oso', 'mani']

let nums: number[] = [1, 4, 4]

// si lo dejan basio el arreglo por defecto any, se tiene que haces 
// 1-inicializarlo con un valor 
let nums2 = [2, 4]
// o
// 2-que le pongamos el tipo de datos 
// se le indico que es un boolean
let checks: boolean[] = []

// metodo actenativo que tiene ts
let nume3: Array<number> = []

// .map te permite interal los arreglos y darle una funcion 
// nums.map(x => x.) // el autocompletado sugiere metodos de datos, para agilizar la  codficacion 

// control + espacion para ver las sugerencias
animales.map(x => x.split)


// las tuplas te permiten guadar datos, si su valor se encuentra ahi, si no, da error
// se puede hacer tipos de datos de arreglos, solo tienes que poner[]
// no uses muchos datos para las tuplas se vuelve incomodo, no mas de 2 a 3 
let tupla: [boolean, number, string[]] = [true, 4, ['jeremy', 'jose', 'avin']]


// Emun y se usa para las apis

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// en el enum se hace un PascalCase, que esto dice que en el comienzo de cada palabra comience con mayuscula y despues puede ser con minuscula
enum Talla { Chica, Mediana, Grande, Extragrande }
// viene por defecto 0 1 2 3 si no se quiere haci se puede hacer asi y los demas se auto compeltan
enum Forma0 { Chica = 1, Mediana, Grande, Extragrande }

// o  por string, pero si se hace asi tiene que hacerlo en cada uno 
enum Forma { Chica = 's', Mediana = 'm', Grande = 'l', Extragrande = 'xl' }

const variable1 = Forma.Mediana
console.log(variable1)

// Para hacer que sea mas corto
const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success


// Objetos

// solo en js se hace asi 
// object.nombre = "hola mundo "

const object = { Id: 2, nombre: 'hola mundo' }


// const objecto: {
// readonly es para que no se cambien la propiedade, para que sea solo de lectura no de escritura

// readonly id: number,
// nombre: string,
// talla: Forma,

// el signo de pregunta es para ponerlo obsional, y borrarlo a bajo
// nombre?: string,

// Si no la detallas da error
// } = { id: 1, nombre: 'hola', talla: Forma.Grande }

// para cambiar sus propiedades
// objecto.id = 23

// Usar la definicion de tipos para poder usarlo nuestro objeto en otro lado
// Asi es mas ordenado

type dirreccion = {
    numerol: number,

    //   Asi puedo hacer que sea de tipo string(letras) o tipo number(numero)
    calle: string | number,
    pais: string

}

// los type de datos permiten especificar lo tipos

type persona = {

    readonly id: number,
    nombre: string,
    talla: Forma,
    dirrecion: dirreccion
}


const objecto: persona = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Forma.Grande,
    dirrecion: {
        numerol: 2,
        calle: 'Santo',
        pais: 'Rd'

    }
}
const arr: persona[] = []

// las interface son unpoco mas generales, por que son clave valor, y puedes usar esa caracteristicas de interface,
//  es mas recomendable usar interface sobre tipos(type) 

interface developer {
    nuevo: string,
    sigue: number
}

interface developer {
    phone: number,

}
const me: developer = {

    nuevo: 'nuevo',
    sigue: 23,
    phone: 3

}


// Clases
// para modelear cosas que estaran en el exterior de una manera programatica, de eso se vasa la programacion orienta a objetos

// son las mismas clases que se usa en JS. es parecido a las interface
class animal {
    // tres tipos de protecion de datos

    // es irrelevante poner public ya que esta publico por defecto
    // public es para todo
    public animales?: "General animales";

    // Solo en la clase
    private age = 10;

    // Las clases y las clases que extienden(extends) esta clases
    protected indentify = "nose";


    // cuando hacemos New en realidad llamos al constructor

    constructor() { }

    sayHi() {
        console.log("Grrrr", this.age);
    }

}

// ya todo lo que esta dentro de dog ya esta en animal
// para aplicar herencia

class dog extends animal {
    type?: "buldog";
    constructor() {
        super();
    }

    sayHi() {
        this.indentify;
    }

}



// new es perosnal de las clases
const myAninal: animal = new animal();
myAninal.sayHi();

// para eso es la extends para usar lo que tiene ya creado otro/ animal
const mydog: dog = new dog();


