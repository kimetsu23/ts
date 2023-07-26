// Type Script Tiene una libreria con todos los Utility Types
// Link: https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype


// Partial<T>, lo que hace es que recibe un tipo de dato generico, y te devuelvo una interface,
// con un tipo(type) con esa misma extructura pero con todo los campos opcional(?)

interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: string, fieldsToUpdate: Partial<Todo>) {

  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };

  updateTodo("throw out trash", todo1);


// Su contra parte es el Required<T>
// Este hace que aun que losv campos esten opcional(?) se pongan obligatorios
interface Props {
    a?: number;
    b?: string;
  }
   
//   sin Required
  const obj: Props = { a: 5 };
   
//   con Required tienes que llamarlos a todos
  // const obj2: Required<Props> = { a: 5 };


//   Records<Keys, Types> Es para la creacion de los Objetos
// Tu puedes llamar los campos o (keys) que tiene la interface o lo que quieras añadir

interface NameInfo {
    age: number;
    name: string;
  }
   
//   Aqui Puedo añadir datos y crear objecto, aqui hace que tenga que escribirlo bien si errores
  type NickName = "Jeremy" | "Geraldino" | "Kimetsu";
   
  const NickNames: Record<NickName, NameInfo> = {
    Jeremy: { age: 10, name: "NickName" },
    Geraldino: { age: 5, name: "FirstName" },
    Kimetsu: { age: 16, name: "NickName" },
  };
   
  NickNames.Kimetsu;


//   Pick<T, Property>
// Se usa para escoger los campos que quiero utilizar y los que no 
// Examplo

interface Too {
    title: string;
    description: string;
    completed: boolean;
  }
   
  type TodoPreview = Pick<Too, "title" | "completed">;
   
  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };
   
  todo;
  
  
  