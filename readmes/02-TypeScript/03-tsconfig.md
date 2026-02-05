# Ejemplo de Archivo "tsconfig.json"

[Volver a Inicio](../../README.md)

> Ejemplo de tsconfig.json configurado para un backend Node.js (Express + TypeORM), priorizando tipado estricto, mantenibilidad y compatibilidad con entornos de producción.

> Se describen brevemente cada opción de las secciones del archivo "tsconfig.json".

```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es2020",
    "moduleResolution": "node",

    // For nodejs:
    "lib": ["es2020"],
    "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    // "sourceMap": true,
    // "declaration": true,
    // "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    // "jsx": "react-jsx",
    "verbatimModuleSyntax": false,
    // "isolatedModules": true,
    // "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,

    // Extras
    "noImplicitAny": true,
    "forceConsistentCasingInFileNames": true,
    "removeComments": true
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

## INDICE DE SECCIONES

1. [File Layout / Entrada y salida](#file-layout)
2. [Environment Settings / Compilación](#environment-settings)
3. [For NodeJS / Tipos de NodeJS](#for-nodejs)
4. [Other Outputs](#other-outputs)
5. [Stricter Typechecking / Tipado más seguro](#stricter-typechecking)
6. [Style Options / Opciones de estilo y buenas prácticas](#style-options)
7. [Module System / Detección de módulos](#module-system)
8. [Recommended Options / Opciones Recomendadas](#recommended-options)
9. [Extras / Opciones adicionales](#extras)
10. [Include & Exclude](#include-exclude)

## Opciones de configuración

## File Layout

-  **Entrada y salida**: Define la estructura del proyecto, indicando dónde se encuentra el código fuente y dónde se genera el código compilado.

- `rootDir`

  Indica la carpeta donde se encuentra el código fuente TypeScript (.ts).
  - 👉 Solo se compilarán archivos dentro de ./src.

- `outDir`

  Indica la carpeta donde se generará el código JavaScript compilado (.js).
  - 👉 En este caso, todo se genera en ./dist.

[Volver al Indice](#indice-de-secciones)

---

## Environment Settings

- **Compilación**: Establece cómo se transpila el código TypeScript a JavaScript y cómo se resuelven los módulos en un entorno Node.js.

- `"module": "commonjs"`

  Utiliza el sistema de módulos CommonJS, propio de Node.js (require, module.exports).

- `"esModuleInterop": true`

  Habilita la interoperabilidad entre módulos CommonJS y ECMAScript Modules, permitiendo importar librerías exportadas en CommonJS (como Express) utilizando la sintaxis de importación de ECMAScript.

- `"target": "es2020"`

  Define la versión de JavaScript final. Permite usar:
  - async / await
  - Promise
  - sintaxis moderna sin transpilar de más

- `moduleResolution: "node"`

  Indica cómo TypeScript debe resolver los imports:
  - Busca en node_modules
  - Sigue las reglas estándar de NodeJS

[Volver al Indice](#indice-de-secciones)

---

## For nodejs

- **Tipos de NodeJS**: Configura las librerías y tipos necesarios para trabajar correctamente con APIs propias de NodeJS.

- `lib: ["es2020"]`

  Define las APIs disponibles durante la compilación (por ejemplo Promise, Map, etc).

- `types: ["node"]`

  Incluye los tipos de Node.js:
  - fs
  - path
  - process
  - \_\_dirname, etc.

👉 Requiere instalar los tipos de NodeJS:

```bash
npm install -D @types/node
```

[Volver al Indice](#indice-de-secciones)

---

## Other Outputs

- **Salidas adicionales del compilador**: Estas opciones controlan qué archivos extra genera TypeScript además del .js final.
- Son especialmente útiles para debugging, librerías y trabajo en equipo.

### ▶️ sourceMap

- Genera archivos .js.map
- Permite mapear el JavaScript compilado al TypeScript original

- "sourceMap": true

  Sirve para Debuggear TypeScript directamente en:
  - VS Code
  - Chrome DevTools
  - Poner breakpoints en .ts y no en .js

  👉 Muy útil en desarrollo

  ❌ Poco recomendable en producción (genera archivos extra)

### ▶️ declaration

- Genera archivos .d.ts
- Describe los tipos públicos de tu código

- "declaration": true

  Sirve para crear librerías
  - Permitir que otros proyectos tengan:
    - Autocompletado
    - Tipos
    - Validaciones

  👉 Fundamental si publicás paquetes en npm

  👉 No necesario en apps comunes (APIs, backends, frontends)

### ▶️ declarationMap

- Genera archivos .d.ts.map
- Conecta los .d.ts con el código TypeScript original

- "declarationMap": true

  Sirve para Debuggear tipos
  - Navegar desde una definición .d.ts hasta el .ts original en el editor

  👉 Útil en librerías grandes

  👉 Rara vez necesario en aplicaciones normales

[Volver al Indice](#indice-de-secciones)

---

## Stricter Typechecking

- **Tipado más seguro**: Refuerza la seguridad del tipado para prevenir errores comunes relacionados con valores undefined u opciones mal definidas.

- `strict: true`

  Activa todas las validaciones estrictas de TypeScript.

  Es la configuración más recomendada para proyectos profesionales.

- `noImplicitAny: true`

  Evita que TypeScript asigne el tipo any de forma implícita.

- `noUncheckedIndexedAccess: true`

  Obliga a manejar correctamente accesos a índices que podrían ser undefined.

- `exactOptionalPropertyTypes: true`

  Hace que las propiedades opcionales sean tratadas con mayor precisión.

[Volver al Indice](#indice-de-secciones)

---

## Style Options

- **Opciones de estilo y buenas prácticas**: Estas opciones no cambian el funcionamiento del programa, pero ayudan a escribir código más limpio, seguro y mantenible.
- Son especialmente útiles en proyectos medianos y grandes, ayudando a mantener un código más limpio y consistente, evitando malas prácticas y errores lógicos.

### ▶️ noImplicitReturns

- Obliga a que todas las rutas de una función devuelvan un valor.
- Evita funciones que a veces retornan algo y a veces no.
- 👉 Ideal para evitar bugs lógicos difíciles de detectar.

```ts
function sumar(a: number, b: number): number {
  if (a > 0) {
    return a + b;
  }
  // ❌ Error si noImplicitReturns está activo
}
```

### ▶️ noImplicitOverride

- Obliga a usar la palabra clave override cuando se sobreescribe un método de una clase padre.
- Hace explícito que estás reemplazando un comportamiento existente.
- 👉 Muy útil en POO (Programación Orientada a Objetos) y jerarquías de clases grandes.

```ts
class Animal {
  hacerSonido() {}
}

class Perro extends Animal {
  override hacerSonido() {} // ✅
}
```

### ▶️ noUnusedLocals

- Marca como error las variables, funciones o imports que no se usan.
- Ayuda a mantener el código limpio y sin basura.
- 👉 Reduce ruido y mejora la legibilidad.

```ts
const x = 10; // ❌ Error si no se usa
```

### ▶️ noUnusedParameters

- Marca como error los parámetros de funciones que no se utilizan.
- 👉 Ideal para detectar funciones mal diseñadas o código incompleto.

```ts
function saludar(nombre: string, edad: number) {
  console.log(`Hola ${nombre}`);
  // ❌ edad no se usa
}
```

### ▶️ noFallthroughCasesInSwitch

- Evita que un case de un switch continúe ejecutando el siguiente sin break.
- 👉 Previene errores clásicos y difíciles de rastrear.

```ts
switch (dia) {
  case 1:
    console.log("Lunes");
  // ❌ Error sin break
  case 2:
    console.log("Martes");
}
```

### ▶️ noPropertyAccessFromIndexSignature

- Evita acceder a propiedades definidas con índices usando notación de punto.
- Obliga a usar la forma segura con [].
- 👉 Mejora la seguridad cuando se trabaja con objetos dinámicos.

```ts
type Config = {
  [key: string]: string;
};

const config: Config = {};

config.apiUrl; // ❌ Error
config["apiUrl"]; // ✅ Correcto
```

[Volver al Indice](#indice-de-secciones)

---

## Module System

- **Detección de módulos**: Define cómo TypeScript interpreta y gestiona los módulos del proyecto, determinando la forma en que los archivos se consideran módulos, cómo se procesan los import y export, y cómo se adapta la sintaxis de módulos durante la transpilación para asegurar compatibilidad con NodeJS.

- `moduleDetection: "force"`

  Fuerza a TypeScript a tratar los archivos como módulos, incluso si no tienen import o export.

- `verbatimModuleSyntax: false`

  Permite a TypeScript ajustar el código de módulos al transpilar, evitando errores innecesarios.

[Volver al Indice](#indice-de-secciones)

---

## Recommended Options

- **Opciones Recomendadas**: Activa configuraciones recomendadas por TypeScript para un desarrollo más seguro y profesional.

- `skipLibCheck: true`

  Omite la verificación de tipos en archivos .d.ts de librerías externas.
  - ✔️ Compila más rápido
  - ✔️ Evita errores de dependencias

- `forceConsistentCasingInFileNames: true`

  Obliga a respetar mayúsculas/minúsculas en imports.

  Evita errores entre Windows y Linux/macOS.

[Volver al Indice](#indice-de-secciones)

---

## Extras

- **Opciones adicionales**: Estas configuraciones adicionales refuerzan buenas prácticas, evitan errores silenciosos y dejan un output más limpio.

### ▶️ noImplicitAny

- Evita que TypeScript asigne el tipo any automáticamente.
- Obliga a tipar explícitamente variables, parámetros y retornos cuando no puede inferir el tipo.
  - ✔️ Obliga a declarar los tipos
  - ✔️ Reduce errores en runtime
  - ✔️ Hace el código más auto-documentado
- 👉 Muy recomendable en cualquier proyecto serio.

```ts
function saludar(nombre) {
  return `Hola ${nombre}`;
}
// ❌ Error: nombre tiene tipo 'any'
```

### ▶️ forceConsistentCasingInFileNames

- Obliga a respetar exactamente mayúsculas y minúsculas en los imports.
- Evita errores entre sistemas operativos:
  - En Windows funciona aunque esté mal
  - En Linux/macOS rompe en producción
- 👉 Esta opción previene bugs clásicos de deploy.

```ts
import { UserService } from "./UserService"; // ❌
import { UserService } from "./userservice"; // ❌
import { UserService } from "./userService"; // ✅
```

### ▶️ removeComments

- Elimina los comentarios del JavaScript generado (.js).
- El código fuente (.ts) NO se ve afectado.
  - ✔️ Output más limpio
  - ✔️ Archivos finales más pequeños
  - ✔️ Menos información expuesta
- 👉 Útil para builds finales o producción.

```ts
// Comentario en TypeScript
console.log("Hola");

console.log("Hola"); // comentario eliminado
```

[Volver al Indice](#indice-de-secciones)

---

## Include Exclude

- **Incluir y Excluir**: Determina qué archivos deben compilarse y cuáles deben ignorarse durante el proceso.

- `include:`

```json
["./src/**/*.ts"]
```

Compila todos los archivos .ts dentro de src y sus subcarpetas.

- `exclude:`

```json
["node_modules", "dist"]
```

Evita:

- recompilar dependencias
- ciclos innecesarios
- errores por doble compilación

[Volver al Indice](#indice-de-secciones)

---

[Volver a Inicio](../../README.md)
