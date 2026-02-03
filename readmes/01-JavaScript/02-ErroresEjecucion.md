# 📚 Errores en tiempo de ejecución

[Volver a Inicio](../../README.md)

- Errores en tiempo de ejecución, no detectados en tiempo de compilación (desarrollo)
  - Variable no definida
  - Objeto NO tiene una propiedad esperada
  - No se sabe exactamente qué recibe o retorna una función
  - Se sobrescriben variables, clases o funciones
  - Errores por Case Sensitive

## 🛠️EJEMPLOS | Errores tiempo de ejecución

```js
//* VARIABLE NO DEFINIDA:
console.log(nuevaVariable);
// ❌ ReferenceError: nuevaVariable is not defined

//* PROPIEDAD DE OBJETO INEXISTENTE:
var usuario = {
  nombre: "Homero",
};
console.log(usuario.apellido.toUpperCase());
// ❌ TypeError: Cannot read properties of undefined (reading 'toUpperCase')

//* INVOCAR MÉTODOS INCORRECTOS POR TIPO DE DATO:
var nuevoNumero = 1234;
console.log(nuevoNumero.toUpperCase());

// ❌ TypeError: nombre.toUpperCase is not a function

//* INPUT Y OUTPUT DE FUNCIÓN:
function sumar(a, b) {
  return a + b;
}
console.log(sumar("2", 3));
// "23" ❌ Resultado inesperado

//* SOBREESCRITURA DE VARIABLES, CLASES Y FUNCIONES:
let sumar = (a, b) => a - b;
console.log(sumar(2, 3));
// ❌ SyntaxError: Identifier 'sumar' has already been declared

//* ERRORES POR CASE-SENSITIVE:
let Nombre = "Homero";
console.log(nombre);
// No se ha encontrado el nombre "nombre". ¿Quiso decir "Nombre"? ts
// ❌ ReferenceError: nombre is not defined
```

[Volver a Inicio](../../README.md)