// importacion del modul
// solo escribes el codigo y el import se auto completa

// import { generateId, pi } from "./module";

// otro metodo de llamar a mi interfas
import * as Ultis from "./module";

// para reagcinaciones a los nombres de las variables
import {user as Bro} from "./module";



const mynumero = 10 + Ultis.pi;

const myuser: Bro = {id: Ultis.generateId().toString(), nombre: "jeremy", numero:2, real: true}

console.log({
    mynumero,
    myuser
});