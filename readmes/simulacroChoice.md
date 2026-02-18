# Múltiple Choice

[Volver a Inicio](../../README.md)

## 1. ¿Cuál es la salida de la siguiente ruta en un controlador de Express cuando se accede a GET /api/user/5?

```js
app.get("/api/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

- a) User ID:
- b) User ID: 5
- c) User ID: id
- d) User ID: undefined
<details>
  <summary>Respuesta correcta...</summary>
b) User ID: 5
</details>

## 2. ¿Cuál de las siguientes es la forma correcta de definir un tipo en TypeScript que represente un objeto con una propiedad name (string) y age (number)?

- a) type Person = { name: string, age: number };
- b) interface Person { name: string; age: number }
- c) Ambas a) y b)
- d) Ninguna de las anteriores
<details>
  <summary>Respuesta correcta...</summary>
c) Ambas a) y b)
</details>

## 3. En React, ¿cuál es la forma correcta de manejar un estado que depende de una propiedad props.value?

- a) const [value, setValue] = useState(props.value);
- b) const [value, setValue] = useState(() => props.value);
- c) const [value, setValue] = useState(props.value); useEffect(() => setValue(props.value), [props.value]);
- d) useEffect(() => { setValue(props.value); }, [props.value]);
<details>
  <summary>Respuesta correcta...</summary>
c) `const [value, setValue] = useState(props.value); useEffect(() => setValue(props.value), [props.value]);`
</details>

## 4. ¿Qué operador se usa para definir rutas anidadas en react-router-dom versión 6?

- a) Route
- b) Outlet
- c) Switch
- d) Link
<details>
  <summary>Respuesta correcta...</summary>
b) `Outlet`
</details>

## 5. ¿Cuál es la complejidad temporal promedio de una búsqueda binaria en un array ordenado?

- a) O(n)
- b) O(log n)
- c) O(n log n)
- d) O(1)
<details>
  <summary>Respuesta correcta...</summary>
b) O(log n)
</details>

## 6. En TypeORM, ¿cómo se define una relación Many-to-One entre dos entidades?

- a) @OneToMany
- b) @ManyToOne
- c) @RelationId
- d) @JoinColumn
<details>
  <summary>Respuesta correcta...</summary>
b) `@ManyToOne`
</details>

## 7. En Formik, ¿qué método se usa para programáticamente disparar la validación del formulario?

- a) validateForm
- b) submitForm
- c) validateField
- d) handleChange
<details>
  <summary>Respuesta correcta...</summary>
a) `validateForm`
</details>

## 8. ¿Qué propiedad del hook useEffect en React determina si el efecto debe ejecutarse nuevamente?

- a) dependencies
- b) deps
- c) dependenciesArray
- d) cleanup
<details>
  <summary>Respuesta correcta...</summary>
a) `dependencies`
</details>

## 9. ¿Cuál es el propósito del hook useReducer en React?

- a) Almacenar el estado de componentes anidados
- b) Reemplazar useEffect
- c) Manejar lógica de estado compleja
- d) Sincronizar el estado entre componentes
<details>
  <summary>Respuesta correcta...</summary>
c) Manejar lógica de estado compleja
</details>

## 10. ¿Qué hace el siguiente código en TypeScript?

```js
function identity<T>(arg: T): T {
  return arg;
}
```

- a) Devuelve el tipo de arg
- b) Devuelve el valor de arg
- c) Devuelve un objeto vacío
- d) Lanza un error de tipo
<details>
  <summary>Respuesta correcta...</summary>
b) Devuelve el valor de `arg`
</details>

## 11. ¿Cuál de las siguientes rutas es equivalente a /profile/:id en react-router-dom v6?

- a) /profile/:id?
- b) /profile/\_
- c) /profile/:id/\_
- d) Ninguna de las anteriores
<details>
  <summary>Respuesta correcta...</summary>
c) `/profile/:id/*`
</details>

## 12. ¿Cuál es la salida de la siguiente función de orden superior en JavaScript?

```js
function makeMultiplier(x) {
  return function(y) {
    return x \* y;
  };
}
```

const double = makeMultiplier(2);
console.log(double(3));

- a) 5
- b) 6
- c) 7
- d) 8

<details>
  <summary>Respuesta correcta...</summary>
b) 6
</details>

## 13. ¿Qué diferencia hay entre component y element en las rutas de react-router-dom v6?

- a) component acepta funciones, element acepta elementos JSX
- b) component es exclusivo de clases, element es para componentes funcionales
- c) component ha sido reemplazado por element en v6
- d) component es asíncrono, element es síncrono
<details>
  <summary>Respuesta correcta...</summary>
c) `component` ha sido reemplazado por `element` en v6
</details>

## 14. ¿Cuál es la salida de la siguiente consulta en TypeORM?

```js
const users = await userRepository.find({
  where: { age: 25 },
});
```

- a) Un solo usuario con edad 25
- b) Todos los usuarios con edad 25
- c) El primer usuario con edad 25
- d) Lanza un error de tipo
<details>
  <summary>Respuesta correcta...</summary>
b) Todos los usuarios con edad 25
</details>

## 15. En Express, ¿cuál es la diferencia entre app.use y app.get?

- a) app.use es para middlewares, app.get es para rutas específicas
- b) app.use es para GET requests, app.get es para POST requests
- c) app.use es asíncrono, app.get es síncrono
- d) app.use está obsoleto en las últimas versiones de Express
<details>
  <summary>Respuesta correcta...</summary>
a) `app.use` es para middlewares, `app.get` es para rutas específicas
</details>

## 16. En React, ¿qué método del ciclo de vida es equivalente a useEffect cuando se utiliza con un array de dependencias vacío?

- a) componentDidUpdate
- b) componentDidMount
- c) componentWillUnmount
- d) shouldComponentUpdate
<details>
  <summary>Respuesta correcta...</summary>
b) `componentDidMount`
</details>

## 17. ¿Qué hará el siguiente código en TypeScript?

ts
Copiar código
let x: number = 10;
x = "hello";

- a) Lanza un error en tiempo de compilación
- b) Asigna "hello" a x sin errores
- c) Asigna "hello" a x con un warning
- d) Convierte "hello" a número y lo asigna
<details>
  <summary>Respuesta correcta...</summary>
a) Lanza un error en tiempo de compilación
</details>

## 18. En react-router-dom v6, ¿cómo se navega a otra ruta programáticamente dentro de un componente?

- a) history.push('/new-route')
- b) useNavigate().push('/new-route')
- c) useHistory().push('/new-route')
- d) useNavigate()('/new-route')
<details>
  <summary>Respuesta correcta...</summary>
d) `useNavigate()('/new-route')`
</details>

## 19. ¿Qué hace el siguiente código en Express?

```js
app.use((req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});
```

- a) Interrumpe la ejecución de la siguiente middleware
- b) Lanza un error 404 si el método no es GET
- c) Agrega un middleware que registra el método de la solicitud
- d) Maneja todas las solicitudes con un mensaje de error
<details>
  <summary>Respuesta correcta...</summary>
c) Agrega un middleware que registra el método de la solicitud
</details>

## 20. ¿Cuál es la forma correcta de crear un formulario en React utilizando Formik?

- a) <Form> de Formik
- b) <Form> de react-bootstrap
- c) <form> HTML nativo
- d) <Form> de react-router-dom
<details>
  <summary>Respuesta correcta...</summary>
a) `<Form>` de `Formik`
</details>

## 21. ¿Cuál es la complejidad temporal del algoritmo de Quicksort en el peor de los casos?

- a) O(n)
- b) O(log n)
- c) O(n log n)
- d) O(n^2)
<details>
  <summary>Respuesta correcta...</summary>
d) O(n^2)
</details>

## 22. ¿Cuál es la función de useCallback en React?

- a) Almacenar el estado de un callback entre renders
- b) Ejecutar un callback después de cada render
- c) Evitar la recreación de un callback en cada render
- d) Sincronizar múltiples callbacks
<details>
  <summary>Respuesta correcta...</summary>
c) Evitar la recreación de un callback en cada render
</details>

## 23. ¿Qué hace el siguiente código en TypeScript?

```js
interface Person {
  name: string;
  age?: number;
}

const john: Person = { name: "John" };
```

- a) Lanza un error porque falta la propiedad age
- b) Asigna undefined a age
- c) Omite la propiedad age
- d) Lanza un error en tiempo de ejecución

<details>
  <summary>Respuesta correcta...</summary>
b) Asigna `undefined` a `age`
</details>

## 24. En react-router-dom v6, ¿cómo se obtienen los parámetros de la ruta en un componente?

- a) useParams()
- b) withRouter()
- c) useRouteMatch()
- d) match.params
<details>
  <summary>Respuesta correcta...</summary>
a) `useParams()`
</details>

## 25. ¿Cuál es la salida de la siguiente función en JavaScript?

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(1, "2"));
```

- a) 3
- b) "12"
- c) "3"
- d) undefined

<details>
  <summary>Respuesta correcta...</summary>
b) "12"
</details>

## 26. ¿Qué función en TypeScript se utiliza para asegurarse de que una variable nunca sea null o undefined?

- a) !
- b) ??
- c) !??
- d) Ninguna de las anteriores
<details>
  <summary>Respuesta correcta...</summary>
a) `!`
</details>

## 27. En TypeORM, ¿qué función se utiliza para crear una migración?

- a) generateMigration
- b) runMigration
- c) createMigration
- d) migration:generate
<details>
  <summary>Respuesta correcta...</summary>
d) `migration:generate`
</details>

## 28. En React, ¿qué función se usa para crear un contexto?

- a) createContext
- b) useContext
- c) withContext
- d) createContextProvider
<details>
  <summary>Respuesta correcta...</summary>
a) `createContext`
</details>

## 29. ¿Cuál es la complejidad temporal del algoritmo de búsqueda lineal en un array?

- a) O(1)
- b) O(n)
- c) O(log n)
- d) O(n^2)
<details>
  <summary>Respuesta correcta...</summary>
b) O(n)
</details>

## 30. En formik, ¿cómo se accede a los errores de validación dentro de un componente?

- a) formik.errors
- b) errors
- c) validationErrors
- d) formErrors
<details>
  <summary>Respuesta correcta...</summary>
a) `formik.errors`
</details>

## 31. ¿Qué hará el siguiente código en Express?

```js
app.post("/submit", (req, res) => {
  res.send(req.body);
});
```

- a) Devuelve undefined
- b) Devuelve el cuerpo de la solicitud
- c) Lanza un error 404
- d) Devuelve un objeto vacío
<details>
  <summary>Respuesta correcta...</summary>
a) Devuelve `undefined`
</details>

## 32. En React, ¿qué hook se utiliza para almacenar un valor que no provoca una nueva renderización del componente?

- a) useState
- b) useEffect
- c) useRef
- d) useMemo
<details>
  <summary>Respuesta correcta...</summary>
c) `useRef`
</details>

## 33. En react-router-dom v6, ¿qué propiedad de una ruta se utiliza para redirigir a otra ruta?

- a) redirectTo
- b) element
- c) redirect
- d) path
<details>
  <summary>Respuesta correcta...</summary>
b) `element`
</details>

## 34. En TypeScript, ¿qué palabra clave se utiliza para extender una clase?

- a) implement
- b) extend
- c) inherit
- d) extends
<details>
  <summary>Respuesta correcta...</summary>
d) `extends`
</details>

## 35. En React, ¿cómo se evitan renders innecesarios cuando se pasa una función como prop a un componente hijo?

- a) useMemo
- b) useRef
- c) useCallback
- d) useEffect
<details>
  <summary>Respuesta correcta...</summary>
c) `useCallback`
</details>

## 36. ¿Cuál es la complejidad temporal del algoritmo Merge Sort?

- a) O(n)
- b) O(log n)
- c) O(n log n)
- d) O(n^2)
<details>
  <summary>Respuesta correcta...</summary>
c) O(n log n)
</details>

## 37. ¿Qué hace el siguiente código en TypeScript?

```js
function greet(person: string | null) {
  console.log(`Hello, ${person?.toUpperCase()}`);
}
```

greet(null);

- a) Lanza un error de tipo
- b) Imprime "Hello, NULL"
- c) Imprime "Hello, undefined"
- d) No imprime nada

<details>
  <summary>Respuesta correcta...</summary>
c) Imprime "Hello, undefined"
</details>

## 38. ¿Qué hace el siguiente código en TypeScript?

```js
let value: any = "Hello, world!";
let strLength: number = (value as string).length;
```

- a) Lanza un error en tiempo de compilación
- b) Convierte value a número
- c) Asigna la longitud de value a strLength
- d) Lanza un error en tiempo de ejecución
<details>
  <summary>Respuesta correcta...</summary>
c) Asigna la longitud de `value` a `strLength`
</details>

## 39. En react-router-dom v6, ¿cómo se crea una redirección condicional?

- a) Usando Redirect
- b) Usando Navigate
- c) Usando history.push
- d) Usando withRouter
<details>
  <summary>Respuesta correcta...</summary>
b) Usando `Navigate`
</details>

## 40. En TypeScript, ¿cuál es la diferencia entre interface y type?

- a) interface es para tipos primitivos, type es para objetos
- b) interface es más flexible que type
- c) type es más flexible que interface
- d) interface y type son completamente equivalentes
<details>
  <summary>Respuesta correcta...</summary>
b) `interface` es más flexible que `type`
</details>

## 41. En React, ¿cómo se optimiza un componente para que solo se renderice si cambian ciertas propiedades?

- a) Usando React.memo
- b) Usando useEffect
- c) Usando useCallback
- d) Usando useMemo
<details>
  <summary>Respuesta correcta...</summary>
a) Usando `React.memo`
</details>

## 42. ¿Cuál es la complejidad espacial de un algoritmo que utiliza un array de tamaño n?

- a) O(1)
- b) O(n)
- c) O(log n)
- d) O(n^2)
<details>
  <summary>Respuesta correcta...</summary>
b) O(n)
</details>

## 43. En TypeORM, ¿qué opción se debe usar para actualizar automáticamente las entidades en la base de datos cuando cambian los modelos?

- a) autoUpdate
- b) synchronize
- c) migrationRun
- d) entitySync
<details>
  <summary>Respuesta correcta...</summary>
b) `synchronize`
</details>

## 44. ¿Qué hace el siguiente código en React?

```js
function Component() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- a) Incrementa count en 2 cada vez que se hace clic en el botón
- b) Muestra count pero no lo incrementa
- c) Incrementa count en 1 cada vez que se hace clic en el botón
- d) Muestra siempre 0

<details>
  <summary>Respuesta correcta...</summary>
c) Incrementa `count` en 1 cada vez que se hace clic en el botón
</details>

## 45. En react-router-dom v6, ¿qué hook se utiliza para obtener la ruta actual?

- a) useLocation
- b) useRouteMatch
- c) useParams
- d) useNavigate
<details>
  <summary>Respuesta correcta...</summary>
a) `useLocation`
</details>

---

## Cada desafío es una oportunidad para aprender y crecer. ¡Sigue adelante, el éxito está en el camino! 💛💛💛

[Volver a Inicio](../../README.md)
