// module y namepaces son similares,
// pero en module no lo tienes que agrupar dentro de algo,
// solo tienes que escribir codigo y exportar y importar

export const pi= 3.14;

export interface user{
    id: string,
    nombre: string,
    numero: number,
    real: boolean
}

// como solo retornare esto, lo puedo poner asi sin llave

export const generateId = () => Math.floor(Math.random() * 100);
    
    


// export const generateId = () =>{
// return Math.floor(Math.random() * 100);

// };