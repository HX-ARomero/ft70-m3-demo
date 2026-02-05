# M3-03 Express & TypeScript

[Volver a Inicio](../../README.md)

## Links

En una aplicación estructurada, separar las responsabilidades entre rutas, controladores y servicios permite un código más limpio, mantenible y escalable.

- [TypeScript - Documentación](https://www.typescriptlang.org/)
- [Express - Documentación](https://expressjs.com/es/)
- [CORS - Documentación](https://www.npmjs.com/package/cors)
- [Morgan - Documentación](https://www.npmjs.com/package/morgan)
- [Status Code - Cats](https://http.cat/)
- [Status Code - Dogs](https://http.dog/)

## Flow de Express

<img src="./assets/express.png" alt="Express Flow"/>

### 🧭 1. Rutas (Routes)

> Definen las URL y el método HTTP (GET, POST, PUT, DELETE, etc.) que se utilizarán para acceder a los controladores.

🔹 Responsabilidades de las Rutas:

- Asignan un controlador a cada endpoint.
- No contienen lógica de negocio.
- Organizan las entradas del sistema.

### 🧑‍⚖️ 2. Controladores (Controllers)

> Reciben las peticiones del cliente, extraen datos de req (body, params, query), y delegan la lógica al servicio correspondiente.

🔹 Responsabilidades de los Controladores:

- Interpretan la solicitud del cliente.
- Tienen acceso al objeto "req" y "res".
- Validan datos de entrada.
- Llaman a los servicios para resolverla.
- Manejan el error
- Devuelven una respuesta (res) al cliente.

### ⚙️ 3. Servicios (Services)

> Contienen la lógica de negocio. Procesan datos, realizan operaciones, acceden a la base de datos, etc.

🔹 Responsabilidad de los Servicios:

- No tienen acceso directo al objeto "req" o "res".
- Pueden ser reutilizados por otros controladores/servicios.
- Pueden conectarse con modelos o bases de datos.
- Dan respuesta al controlador.

### 🧩 Relación entre ellos

```txt
[ Cliente ]
  ↑     ↓ HTTP Request
  | [ Rutas ]  ←-- Define el endpoint
  |     ↓
[ Controlador ]  ← Procesa la request, ejecuta los servicios y retorna la respuesta al Cliente
  ↑     ↓
[ Servicio ]  ←--- Aplica la lógica y devuelve respuesta al Controlador
```

### 🎯 ¿Por qué esta separación es útil?

- Escalabilidad
- Reutilización de código
- Separación de responsabilidades
- Facilita testing (puedes testear servicios sin tener que simular req y res)

# FLOW DE NUESTRO PROYECTO

<img src="../assets/ProjectFlow.png" alt="Project Flow"/>

[Volver a Inicio](../../README.md)