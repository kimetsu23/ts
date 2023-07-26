
// namespaces

// Actualmente no son muy utilizados pero hay proyecto con ellos

// namespace es mas para ordenar el codigo

// nos permite agrupar clases, variables, funciona, y todo lo que queremos agrupar para exportarlo a otro lado


// para ejecutarlo tengo que hacer un package.json y llamarlo a los dos juntos,
// con Run start:

namespace data {
 export   class user {
        constructor (public name: string) {}
    }

    const myuser = new user("jeremy");
    // console.log(myuser)

}

