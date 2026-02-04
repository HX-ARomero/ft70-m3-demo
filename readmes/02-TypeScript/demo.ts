//! ----- TIPADO DE VARIABLES con Datos Primitivos -----

// ⚠️Tipado "IMPLÍCITO" en "const":
const nombre = "Homero";

// ⚠️Tipado "EXPLÍCITO" en "const":
const apellido: string = "Simpson";

let edad: number = 38;
// edad = "38";
let tineMascota: boolean = true;

let segundoNombre: any = null;
segundoNombre = "Jay";
// ⚠️"any" desactiva la verificación de Tipo !!!!!
// ⚠️Compila, aunque puede fallar en runtime
// segundoNombre.toFix();

let telefono: unknown = "1111-2222";
telefono = 12345678;
if (typeof telefono === "string") {
  console.log(telefono.toUpperCase());
}

//! ----- TIPADO DE FUNCIONES con Datos Primitivos -----

// ⚠️"noImplicitAny": true (en "tsconfig.json"):
function sumar(a: number, b: number): number {
  return a + b;
}
sumar(2, 4);

// ⚠️"void": Se retorna "undefined":
function saludo(nombre: string): void {
  console.log(`Hola ${nombre}`);
}
saludo("Homero");

// ⚠️"never": No hay retorno:
function error(mensaje: string): never {
  throw new Error(mensaje);
}
// error("Error Crítico!!!");

// ⚠️Retorno de Promesas:
function devuelvePromesa(): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("Mensaje...");
  });
}
devuelvePromesa();

//! ----- TIPO PERSONALIZADO: -----
type TContacto = {
  email: string;
  telefono: number;
};

//! ----- ENUM: -----
enum THobbies {
  SAXOFON = "Saxofón",
  LEER = "Leer",
  JUGAR = "Jugar",
  VERTELE = "Ver Tele",
}

//! ----- INTERFAZ: -----
interface IUsuario {
  nombre: string;
  apellido: string;
  edad: number;
  tieneMascotas: boolean;
  segundoNombre: null;
  contacto: TContacto;
  hobbies: THobbies[];
}

const lisa: IUsuario = {
  nombre: "Lisa",
  apellido: "Simpson",
  edad: 8,
  tieneMascotas: true,
  segundoNombre: null,
  contacto: {
    email: "lisa@mail.com",
    telefono: 1234567,
  },
  hobbies: [THobbies.SAXOFON, THobbies.LEER],
};

//! ----- TIPOS UTILITARIOS: -----
// ⚠️Se crea un nuevo Tipo Personalizado con MENOS propiedades
// ⚠️Basado en Interfaces o Tipos, sin modificar el original

const carl: Partial<IUsuario> = {
  nombre: "Carl",
};
const contactoCarl: Partial<TContacto> = {
  email: "carl@mail.com",
};

const lenny: Pick<IUsuario, "nombre" | "edad"> = {
  nombre: "Lenny",
  edad: 40,
};
const contactoLennny: Pick<TContacto, "email"> = {
  email: "lenny@mail.com",
};

const bart: Omit<IUsuario, "contacto" | "hobbies"> = {
  nombre: "Bart",
  apellido: "Simpson",
  edad: 10,
  tieneMascotas: true,
  segundoNombre: null,
};
const contactoBart: Omit<TContacto, "telefono"> = {
  email: "bart@mail.com",
};

//! ----- INTERSECCIÓN "&": -----
// ⚠️Se crea un nuevo Tipo Personalizado con MAS propiedades
// ⚠️Basado en Interfaces o Tipos, sin modificar el original

const ned: IUsuario & { apodo: string } = {
  nombre: "Ned",
  apellido: "Flanders",
  edad: 38,
  tieneMascotas: false,
  segundoNombre: null,
  contacto: {
    email: "ned@mail.com",
    telefono: 1234568,
  },
  hobbies: [THobbies.LEER],
  apodo: "Ned",
};

const contactoNed: TContacto & { linkedIn: string; x: string } = {
  email: "ned@mail.com",
  telefono: 1234568,
  linkedIn: "ned_flanders",
  x: "ned_flanders",
};

//! ----- EXTENSION Y MERGING - Interfaces -----

interface IPersona {
  nombre: string;
}

//* MERGING
interface IPersona {
  edad: number;
}

//* EXTENSIÓN
interface IEmpleado extends IPersona {
  apellido: string;
  cargo: string;
}

const skinner: IEmpleado = {
  nombre: "Sigmour",
  edad: 40,
  apellido: "Skinner",
  cargo: "Director",
};

//! ----- EXTENSION Y MERGING - Tipo Personalizado: -----
type TAnimal = {
  especie: string;
};

//* MERGING: NO PERMITIDO
// type TAnimal = {}

//* EXTENSIÓN
type TMascota = TAnimal & {
  nombre: string;
  edad: number;
};

const stampy: TAnimal = {
  especie: "Elefante",
};
const huesos: TMascota = {
  especie: "Perro",
  nombre: "Huesos",
  edad: 7,
};

//* 🎯Types Vs Interfaces en objetos
// TYPES: Son la opción para trabajar con tipos primitivos o complejos como las uniones e intersecciones.
// INTERFACES: Son más adecuadas para definir la forma de un objeto cuando se planea implementarlas en múltiples lugares o cuando se necesita una extensibilidad de otros tipos.

//* 🎯Cuándo usar cada uno
// Usa interfaces cuando necesitas la flexibilidad de la extensión y la combinación de declaraciones, especialmente cuando defines la forma de objetos y clases.
// Usa tipos personalizados cuando necesitas definir uniones, intersecciones u otros tipos complejos, o cuando prefieres una sintaxis más concisa para tipos simples.

//! ----- UNION TYPES "|": -----

let usuarioLogueado: string | undefined | null;

console.log(usuarioLogueado); // undefined
usuarioLogueado = "Krusty";
usuarioLogueado = null;

//! ----- ALIAS DE TIPO: -----

type TRoles = "invitado" | "registrado" | "admin";

function tienePermiso(rol: TRoles) {
  if (rol === "admin") {
    return "Acceso Permitido";
  }
  return "Acceso Denegado";
}

console.log(tienePermiso("admin"));
// console.log(tienePermiso("tester"));

//! ----- ASERCIÓN DE TIPO (as): -----

let input: unknown = "TypeScript";

// const longitud_1 = input.length;
// Con "as string" le decimos:
//   "Este valor es un string, permitime usar sus métodos”
const longitud_2 = (input as string).length;

//* Forma Segura de Hacerlo: Type Guard:
//   Recomendable cuando no estás 100% seguro del tipo.
//   TypeScript NO necesita "as" porque validamos en runtime.
if (typeof input === "string") {
  const longitud_3 = input.length;
  console.log(longitud_3);
}
