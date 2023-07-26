//MappeTypes, Son crear tipos de manera dinamica basandonos mediate otros tipos(type) O intefaces(inteface)

// Si no lo estudias son dificil de leer, perso eso te hace escribir menos linias de codigos con las inteface y type
// para no tener que de claras las interface lo hacen ellas por defecto con "get"

interface person{
    nombre: string,
    numero: number,
}

// "() =>" Sinifica Funcion

// interface getperson{
// getnombre: () => string,
// getnumero: () => number,
// }

// Mappeado

type Getter<J> = {
    // despues de la palabra As ponemos el nombre que queramos que tenga la inteface
    // Ejemplo, con esta comillas o no funciona ``( as `Prefijo o Nombre${Tipo de variable(string) & llamar la Propiedas}` )
    // Asiendo uso de los templesliteral
    // Para hacer que la primera letra de nuestro esqueleto(interface) este en mayuscula,
    // se encerrara todo dentro de nuestra interface Capitalize
    [Property in keyof J as `si${Capitalize<string & Property>}`]: () => J[Property];
}

// Aqui puedo ver los nombres de las interface y type Usando la funcion de arriba junto con los genericos
type Getperson = Getter<person>;

// Examplo(Ejemplo)

interface Animal {
    id: string,
    name: string,
    type: number;
    isAdapted: boolean;
}

type GetAnimal = Getter<Animal>
