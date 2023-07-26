// Funciones

// Con function run
const sayhi = (segun: string) => {
    console.log('Hola ${segun} ');

};
 sayhi("Casi se caba el curso");

//  o con la palabra reservada function

function saygoodbay(segun: string){
    console.log('Adios ${segun}, Casi termina')

}
saygoodbay("Estudie en codigo facilito");

// destruturacion
interface reponsecd{
    id: number,
    name: string,
    charge: string,
    number: number
    
}


const response: reponsecd = {
    id: 1,
    name: "jeremy ya ya ya ",
    charge: "developer",
    number: 4,
}

// puedo llamrlo todos en espesifico llamando la variable sin las llaves, o si quiero solo un dato asi 

// una forma
// function show({name, ...other}: {id: number; name: string; charge: string; number: number}): number
function show({name, ...other}: reponsecd): number{
   console.log("El id mandado :", name);
   console.log("otros datos:", other);
//    saveperson({name, ...other});
    return 1;
}

show(response)

// void significa que no retonorna nada
// function show(name: string[]): number{
//     console.log("Hola")
//     name.map
//     return 1;
// }


// const response = show()