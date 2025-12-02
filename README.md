# Proyecto React + PokeAPI  
## Link al despligue
```url
https://pokeapprebeca.netlify.app/
```
## Buscador de Pokémons con Hooks, Router, Context y LocalStorage

Este proyecto consiste en crear una aplicación en **React funcional** que permite buscar, visualizar y crear nuevos Pokémons usando la **PokeAPI**. A lo largo del desarrollo se trabajará con:

- React Router
- Hooks: `useState`, `useEffect`, `useContext`, `useParams`
- Comunicación entre componentes
- Debounce
- Context API
- LocalStorage

---

## 📌 Fase 1: Enrutado de la página  
Configura las rutas utilizando **React Router** y crea un navbar con `<Link />`.

### Rutas requeridas:

### `/`
Renderiza los componentes:
- `SearchContainer`
  - `Search` → búsqueda de Pokémons
  - `PokemonList` → listado de resultados

El componente debe hacer una llamada inicial a la API al montarse.

---

### `/new`
Página para crear un nuevo Pokémon. Renderiza:

- `PokemonForm` (formulario de alta)

---

### `/pokemon/:id`
Página de detalle. Renderiza:

- `PokemonDetails`

Ejemplos de rutas con params y query params:
 ```url
/pokemon/2?name=bulbasur&image=url_imagen&typeOne=plant

/pokemon/7?name=squirtle&image=url_imagen&typeOne=water

/pokemon/4?name=charmander&image=url_imagen&
typeOne=fire

/pokemon/25?name=pikachu&image=url_imagen&typeOne=electric
 ```

---

## 📌 Fase 2: Búsqueda de Pokémons

### Componentes necesarios:
- `SearchContainer`  
  Contiene `Search` y `PokemonList`.
- `Search`
  - Input de texto
  - Botón de búsqueda
  - Lógica de petición a la API
- `PokemonList`
  - Renderiza la lista de pokémons
- `PokemonCard`
  - Renderiza un Pokémon en forma de tarjeta

### Lógica:
- `SearchContainer` contiene:
  - Estado del input
  - Estado con la lista de resultados

Cada vez que se pulse *Buscar*:
1. Se consulta la PokeAPI por nombre o id  
2. Se añade el resultado al array de pokémons  
3. `PokemonList` lo renderiza  
4. El input se limpia  

---

## 📌 Fase 3: Búsqueda con Debounce

La aplicación debe permitir buscar automáticamente mientras el usuario escribe.

### Requisitos:
- Implementar una función **debounce**
  - Ejecutar la petición tras 1.5–3 s sin teclear
- Evitar saturar la API

### Reglas:
- Si el input está vacío → **no hacer petición**
- Si el Pokémon ya existe en la lista → **no repetir búsqueda**

---

## 📌 Fase 4: Alta de Pokémons con Context

La lista de pokémons creados debe almacenarse en el componente `App` y compartirse mediante **Context**.

### Flujo:
- `App` → Provider (almacena la lista de pokémons creados)
- `PokemonForm` → Consumer (añade un nuevo Pokémon)
- `Search` → Consumer (consulta la lista de pokémons creados)

### Formato del Pokémon creado:

```json
{
  "id": "",
  "name": "",
  "image": "",
  "typeOne": "",
  "typeTwo": ""
}
```
## 📌 Fase 5: Persistencia con LocalStorage
La aplicación debe recordar los pokémons creados incluso al recargar.

``` js
localStorage.setItem("customPokemons", JSON.stringify(lista));
```

## 🚀 Tecnologías

- React
- React Router
- Context API
- react-hook-form
- PokeAPI
- LocalStorage