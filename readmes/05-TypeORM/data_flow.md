# 📚 FLOW GENERAL DEL PROYECTO

[Volver a Inicio](../../README.md)

---

<br/>

```txt
Client ---> Request
    ↑          ↓
    |       Middlewares / Rutas
    |          ↓
    └------ Controllers  (manejo de request y errores)
              ↓  ↑
            Services     (lógica de negocio)
              ↓  ↑
            Repositories (acceso a base de datos)
```

<br/>

---

<br/>

<img
  src="./assets/data_flow.png"
  alt="Diagrama Entidad Relación"
  style="display: block; margin: 0 auto; width: 100%;"
/>

---

<br/>

[Volver a Inicio](../../README.md)
