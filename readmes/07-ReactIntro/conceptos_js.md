# 📘 Conceptos de JavaScript utilizados en React

[Volver a Inicio](../../README.md)

Este documento resume los conceptos de JavaScript más utilizados en React, con ejemplos prácticos.

---

## 1️⃣ Destructuring (Desestructuración)

Permite extraer propiedades de objetos o elementos de arrays.

### 👉 En objetos

```js
const user = {
  name: "Homero",
  age: 40,
};

const { name, age } = user;

console.log(name); // Homero
```

📌 El orden NO importa, ya que se accede por nombre de propiedad.

#### 🔹 En props de React

```jsx
function Welcome({ name }) {
  return <h1>Hola {name}</h1>;
}
```

### 👉 En arreglos

```js
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

📌 El orden importa, ya que se accede por índice.

```jsx
const [user, setUser] = useState({
  name: "Ariel",
  age: 30,
});
```

#### 🔹 En React

```jsx
const [user, setUser] = useState({
  name: "Ariel",
  age: 30,
});
```

---

## 2️⃣ Operador Ternario

Permite hacer condicionales en una sola línea:

```js
const isLogged = true;

//*            condición ?    siTrue    :    siFalse
const message = isLogged ? "Bienvenido" : "Inicia sesión";
```

### 🔹 En React

```jsx
function Greeting({ isLogged }) {
  return (
    <div>
      {isLogged ? <h2>Bienvenido</h2> : <h2>Por favor inicia sesión</h2>}
    </div>
  );
}
```

---

## 3️⃣ Método `.map()`

Permite recorrer arrays y transformar sus elementos.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
```

### 🔹 En React (renderizado de listas)

```jsx
function List() {
  const users = ["Ana", "Juan", "Pedro"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
```

⚠️ En React siempre usar la propiedad `key` en listas.

---

## 4️⃣ Spread Operator (`...`)

Permite copiar o expandir objetos y arrays.

### 🔹 En arrays

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]
```

### 🔹 En objetos (muy usado en estados)

```js
const user = { name: "Ariel", age: 30 };

const updatedUser = { ...user, age: 31 };
```

### 🔹 En React (actualizando estado)

```jsx
setUser((prev) => ({
  ...prev,
  age: 31,
}));
```

---

## 5️⃣ Arrow Functions (`=>`)

Funciones más cortas y muy usadas en React.

```js
const sum = (a, b) => a + b;
```

### 🔹 En eventos

```jsx
<button onClick={() => console.log("Click!")}>Click</button>
```

---

## 6️⃣ Short Circuit (&&)

Permite renderizar algo solo si la condición es verdadera.

```jsx
function Notification({ hasMessage }) {
  return <div>{hasMessage && <p>Tienes un nuevo mensaje</p>}</div>;
}
```

Si `hasMessage` es `false`, no se renderiza nada.

---

## 7️⃣ Optional Chaining (`?.`)

Evita errores cuando una propiedad puede ser `undefined`.

```js
const user = {};

console.log(user.profile?.email); // undefined (no rompe)
```

Muy útil cuando los datos vienen de una API.

---

## 8️⃣ Nullish Coalescing (`??`)

Devuelve un valor por defecto solo si es `null` o `undefined`.

```js
const username = null;

const nameToShow = username ?? "Invitado";
console.log(nameToShow); // Invitado
```

---

## 9️⃣ Filter()

Permite filtrar elementos de un array.

```js
const numbers = [1, 2, 3, 4];

const even = numbers.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]
```

En React se usa antes de hacer `.map()` muchas veces.

---

## 🔟 Eventos y funciones callback

React usa funciones como callbacks.

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

# 📌 Resumen rápido

| Concepto          | Uso principal en React        |
| ----------------- | ----------------------------- |
| Destructuring     | Extraer props, useState       |
| Ternario          | Renderizado condicional       |
| map()             | Renderizar listas             |
| Spread            | Actualizar estado             |
| Arrow functions   | Eventos y callbacks           |
| &&                | Renderizado condicional corto |
| Optional chaining | Datos de APIs                 |
| filter()          | Filtrar antes de renderizar   |

---

# 🧠 Conclusión

React no agrega nueva lógica a JavaScript:  
React **usa JavaScript moderno** para:

- Renderizar dinámicamente
- Manejar estados
- Renderizar listas
- Controlar condiciones
- Manipular datos

Dominar estos conceptos de JS hace que React sea mucho más simple.

---

[Volver a Inicio](../../README.md)