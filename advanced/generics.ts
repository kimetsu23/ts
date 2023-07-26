  // Hay que pensar que centralizar la logica para poder usar genericos 

// Los genericos se hacen asi <Letra>
interface myinterface<J> {
    // para no hacer esto se usa los genericos  
    // esto '|' significa O
    //  field: number | string | boolean

    field: J;
}

interface example {
id: string,
name: string

}

// Aqui declaro el tipo de variable que quiero <string | boolean | number>
 const myvalue: myinterface<string | number> ={
field: 1
}

// const myvalue: myinterface<example> ={
//     field: {
//         id: "",
//         name: ""
//     }
// }


class Myclass<T> {
    field: T;

    // va hacer del tipo generico
    constructor(field: T) {
        // el field que le "mando" va hacer al fin de arriba
        this.field = field;
    }
}

const myobject: Myclass<number | boolean | string> = new Myclass (2)

function getdata<T>(id: string): Promise<T> | void{}

// Exaple with classes(Ejemplos con clases)

// caso de uso
interface userresponse{
    id: number,
    name:string
}

class HTTPresponse <H> {
    data: H;
    status: number;
    code: number;

    constructor(data: H, status: number, code: number) {
        this.data = data,
        this.status = status,
        this.code = code
    }
}

// Una funcion

// El return no es necesario 
const ferchUser = (): userresponse => {
    return{
        id: 1,
        name:"Geraldino",
    }
}

// myuser esta almacenando la respuesta de mi servido
const myuser = ferchUser();

// Asi se puede utilizar mi clase HTTPresponse con la respuesta que da myuser
// El status seria 200, y el code 1
const res = new HTTPresponse(myuser, 200, 1)
console.log (res);


class crud <L> {
    private items: L[];
    constructor(items: L[]){
        this.items = items;

}


// Esto ara que se add (añada)
additem(item: L){
    this.items.push(item);
}

// Esto ara que se borre
removeLastItem(){
    this.items.pop();
}

// Esto ara que que nos retorne los Items del Crud
printItems(): L[]{
    return this.items;
}

    }

    // Tratar de usar semanticas, cuando se trate de array poner la S
    const users: userresponse[] = [
        {id: 1, name: "Kimetsu23"},
        {id: 2, name: "Geraldino"},
        {id: 3, name: "Jeremy"},
    ];

    // Controlador 

    // puedo quitar eso y aun asi, Funciona, solo es para que TYPEscript sepa que usercrud se trata de (users) : crud<userresponse>
    const userCrud: crud<userresponse> = new crud(users);

    // Add una nueva lista
    userCrud.additem({id: 4,  name:"Typescript"});

    // Esto hace que se borre "si se queda vacio()" el ultimo arreglo del Crub | Items
    // userCrud.removeLastItem();


    // Retorname los Items del Crud
    console.log(userCrud.printItems());

    // Hay que pensar que centralizar la logica para poder usar genericos 

