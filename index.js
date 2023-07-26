// tsc para correr de ts a js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// para mirar el js: node el nombre de la carpeta/index.js examplo js/index.js
var mensaje = "hola mundo";
mensaje = "chanchito feliz";
mensaje = "chao mundo";
console.log(mensaje);
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
var trujillo = 1876;
var nombre = "leonisdas";
var real = true;
// let evitarl
// evitarl = "chenchi"
// evitarl = 23
// no es una buena practica, pero despues que uses el inferido any, cuando termines le pones el valor correpondiete
function chanchito(config) {
    return config;
}
// Arreglos
// no usando el inferido de ts
var animale = ['chanchi', 'oso', 'mani'];
// usando el inferido de ts
var animales = ['chanchi', 'oso', 'mani'];
var nums = [1, 4, 4];
// si lo dejan basio el arreglo por defecto any, se tiene que haces 
// 1-inicializarlo con un valor 
var nums2 = [2, 4];
// o
// 2-que le pongamos el tipo de datos 
// se le indico que es un boolean
var checks = [];
// metodo actenativo que tiene ts
var nume3 = [];
// .map te permite interal los arreglos y darle una funcion 
// nums.map(x => x.) // el autocompletado sugiere metodos de datos, para agilizar la  codficacion 
// control + espacion para ver las sugerencias
animales.map(function (x) { return x.split; });
// las tuplas te permiten guadar datos, si su valor se encuentra ahi, si no, da error
// se puede hacer tipos de datos de arreglos, solo tienes que poner[]
// no uses muchos datos para las tuplas se vuelve incomodo, no mas de 2 a 3 
var tupla = [true, 4, ['jeremy', 'jose', 'avin']];
// Emun y se usa para las apis
var chica = 's';
var mediana = 'm';
var grande = 'l';
var extragrande = 'xl';
// en el enum se hace un PascalCase, que esto dice que en el comienzo de cada palabra comience con mayuscula y despues puede ser con minuscula
var Talla;
(function (Talla) {
    Talla[Talla["Chica"] = 0] = "Chica";
    Talla[Talla["Mediana"] = 1] = "Mediana";
    Talla[Talla["Grande"] = 2] = "Grande";
    Talla[Talla["Extragrande"] = 3] = "Extragrande";
})(Talla || (Talla = {}));
// viene por defecto 0 1 2 3 si no se quiere haci se puede hacer asi y los demas se auto compeltan
var Forma0;
(function (Forma0) {
    Forma0[Forma0["Chica"] = 1] = "Chica";
    Forma0[Forma0["Mediana"] = 2] = "Mediana";
    Forma0[Forma0["Grande"] = 3] = "Grande";
    Forma0[Forma0["Extragrande"] = 4] = "Extragrande";
})(Forma0 || (Forma0 = {}));
// o  por string, pero si se hace asi tiene que hacerlo en cada uno 
var Forma;
(function (Forma) {
    Forma["Chica"] = "s";
    Forma["Mediana"] = "m";
    Forma["Grande"] = "l";
    Forma["Extragrande"] = "xl";
})(Forma || (Forma = {}));
var variable1 = Forma.Mediana;
console.log(variable1);
var estado = 2 /* LoadingState.Success */;
// Objetos
// solo en js se hace asi 
// object.nombre = "hola mundo "
var object = { Id: 2, nombre: 'hola mundo' };
var objecto = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Forma.Grande,
    dirrecion: {
        numerol: 2,
        calle: 'Santo',
        pais: 'Rd'
    }
};
var arr = [];
var me = {
    nuevo: 'nuevo',
    sigue: 23,
    phone: 3
};
// Clases
// para modelear cosas que estaran en el exterior de una manera programatica, de eso se vasa la programacion orienta a objetos
// son las mismas clases que se usa en JS. es parecido a las interface
var animal = /** @class */ (function () {
    // cuando hacemos New en realidad llamos al constructor
    function animal() {
        // Solo en la clase
        this.age = 10;
        // Las clases y las clases que extienden(extends) esta clases
        this.indentify = "nose";
    }
    animal.prototype.sayHi = function () {
        console.log("Grrrr", this.age);
    };
    return animal;
}());
// ya todo lo que esta dentro de dog ya esta en animal
// para aplicar herencia
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super.call(this) || this;
    }
    dog.prototype.sayHi = function () {
        this.indentify;
    };
    return dog;
}(animal));
// new es perosnal de las clases
var myAninal = new animal();
myAninal.sayHi();
// para eso es la extends para usar lo que tiene ya creado otro/ animal
var mydog = new dog();

// Funciones
// Con function run
var sayhi = function (segun) {
    console.log('Hola $(segun) ');
};
sayhi("Casi se caba el curso");
//  o con la palabra reservada function
function saygoodbay(segun) {
    console.log('Adios $(segun), Casi termina');
}
saygoodbay("Estudie en codigo facilito");
