# 🎯Semantic Versioning (SemVer) - Resumen

[Volver a Inicio](../../README.md)

- Semantic Versioning (SemVer) es un sistema de control de versiones para software que utiliza una secuencia de números separados por puntos (mayor.menor.parche) para identificar diferentes versiones del software de manera clara y consistente. Este sistema ayuda a los desarrolladores a entender el tipo de cambios que se han realizado en una nueva versión de un software.
- La especificación de Semantic Versioning se puede encontrar en [semver.org](https://semver.org/), y se sigue comúnmente en la gestión de versiones de paquetes en lenguajes de programación como JavaScript (npm), Python (pip), y muchos otros.

## FORMATO DE VERSIÓN

- Un número de versión de SemVer tiene el siguiente formato:
  - MAJOR.MINOR.PATCH
- **MAJOR** (Mayor): Se incrementa cuando se realizan en la API cambios incompatibles con una versión anterior.
- **MINOR** (Menor): Se incrementa cuando se añaden funcionalidades de forma compatible con versiones anteriores.
- **PATCH** (Parche): Se incrementa cuando se hacen correcciones de errores de forma compatible con versiones anteriores, sin modificar la funcionalidad.

## Etiquetas pre-lanzamiento y metadata

- SemVer también permite añadir etiquetas pre-lanzamiento y metadata adicional:

1. **Etiquetas pre-lanzamiento**:
   - Indicadas con un guion después del número de versión.
   - Ejemplo: `1.0.0-alpha`, `1.0.0-beta.2`
2. **Metadata de construcción**:
   - Indicada con un signo más.
   - Ejemplo: `1.0.0+001`, `1.0.0-beta+exp.sha.5114f85`

## Ejemplo de versiones SemVer

- **1.0.0**: Primera versión estable.
- **1.0.1**: Corrección de errores.
- **1.1.0**: Añadida una nueva funcionalidad compatible.
- **2.0.0**: Cambio incompatible con versiones anteriores.
- **2.1.0-alpha**: Versión alpha (pre-lanzamiento) para la próxima versión menor.
- **2.1.0+exp.sha.5114f85**: Versión con metadata de construcción.

## Ventajas de SemVer

- **Claridad**: Los números de versión reflejan claramente el tipo de cambios realizados.
- **Compatibilidad**: Facilita la gestión de dependencias y la integración de software, ya que se puede confiar en que las actualizaciones menores y de parches no romperán la compatibilidad.
- **Comunicación**: Establece expectativas claras para los usuarios sobre la naturaleza y el impacto de una nueva versión.

## 📦 Un Ejemplo Práctico de SemVer

### 🔢 Sumar – Versión 1.0.0

```js
function sumar(a, b) {
  const total = a + b;
  return total;
}
```

- Primera versión estable, versión 1.0.0.
- La función suma dos números.

### 🩹 Sumar – Versión 1.0.1 (PATCH)

```js
function sumar(a, b) {
  return a + b;
}
```

- Se trata de un arreglo interno / refactor.
  - No cambia cómo se usa la función.
  - No se agrega funcionalidad.
  - Solo mejoras internas (bugs, legibilidad, performance, etc.)
- Se modifica solo PATCH.
- Aunque el código sea casi igual:

### ✨ Sumar – Versión 1.1.0 (MINOR)

```js
function sumar(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}
```

- Agregamos nueva funcionalidad.
- Ahora puede sumar más de dos números.
- Mantiene retrocompatibilidad:
  - `sumar(2, 3);` sigue funcionando.
- Se modifica MINOR.

✅ Ejemplos válidos:

```js
sumar(2, 3); // 5
sumar(1, 2, 3, 4); // 10
```

### 🚨 Sumar – Versión 2.0.0 (MAJOR)

```js
function sumar({ numeros }) {
  return numeros.reduce((total, n) => total + n, 0);
}
```

- Se introduce un cambio incompatible.
- La función ya no recibe números sueltos, ahora recibe un objeto.
- El código anterior deja de funcionar.
- Se modifica MAJOR.

❌ Esto ahora rompe:

```js
sumar(2, 3); // ERROR
```

✅ Nueva forma correcta:

```js
sumar({ numeros: [2, 3, 4] }); // 9
```

### 🧠 Resumen mental rápido (regla de oro)

- PATCH (1.0.X) → arreglo interno 🩹
- MINOR (1.X.0) → nueva funcionalidad sin romper nada ✨
- MAJOR (X.0.0) → rompe compatibilidad 🚨

---

[Volver a Inicio](../../README.md)
