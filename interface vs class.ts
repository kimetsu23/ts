// interface vs clases

// Las interface son como esqueletos, que como que puede decir lo que tendra

interface Personinterface {
    nuevo: string,
    sigue: number,
    code: string | number,
    description?: string,
    sayhello: () => string;
}


// mientras que en las clases: Me dice que tendra, me construlle el objeto y puedes ponerle codigos(implementaciones)

class personclasess {
    sayhello() {
        console.log("uff");


        // para llamar datos http
        // fetch("....")
    }
}

// Las interface son mas planos, planos de como contruir el objeto pero no te lo dan contruido
// const personone: Personinterface = {
//     sayhello() {
      
//     }
// };



// puedo hacerlo asi o ir a mi palabra reservada New

// const persontwo: personclasess = {sayhello() {}},

const personzero: personclasess = new personclasess;
personzero.sayhello();

// Repaso
interface petinterface{
    sayhello: () => string;
}

class petclass{
    sayhello() {
        return "Hola";
    }
}


// implements me obliga a cumplir con el contrato que estoy implementando(petinterface)
// y tengo que hacerlo de manera manual
class otro implements petinterface {
    sayhello() 
    {return "hola desde otro"
};
}

// Mientras que extends me trae todo lo que tiene petclass y me lo incluiye en cat
// Es como permitirme reutilizar codigo, es como que estuviera copiando y pegando todo lo de esa clase
// Sin hacerlo a mano
class cat extends petclass {}
