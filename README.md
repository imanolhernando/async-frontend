# ⚡ Async Front End ⚡

- LIVE DEMO ➡️ [https://async-ngrx-frontend.netlify.app/](https://async-ngrx-frontend.netlify.app/)

---

## Requisitos funcionales ☑️

- El usuario podrá buscar una repositorio de Github.
  - Se validara que sea un repositorio de Github.
- Tras buscar se listara todas las issues de ese repositorio
  - La búsqueda contendra paginación
  - Si se recarga la página se mantendra la búsqueda del repositorio pero no la paginación
  - Se podra cambiar el numero de resultados por página
  - En caso de introducir una url que no coincida con un repositorio se mostrara un error `NOT FOUND`
  - Se podra cerrar y volver a la pagina incial desde la página de resultados

### Proximas funcionalidades y mejoras 📢

- Configuración [SSR](https://angular.io/) para mejorar la carga inicial, llamar a la API desde el servidor y que la aplicación pueda ser indexada por los buscador.
- Mejorar la arquitectura de la gestión del estado implementando "Facade Services"
- Mejorar arquitectura de componentes ui
- Testing

---

<!-- ### 💫  DDD  y arquitectura hexagonal -->
## Frameworks desarrollo📑

- [Angular 15](https://angular.io/)

- [Material Angular 14](https://v14.material.angular.io/)

- [NgRx](https://ngrx.io/)  Reactive State for Angular

<!-- ## Testing :🧪

- 
-  -->

## Lint 🌡️

- [ESLint](https://eslint.org/)

```bash
npm run lint
#or
ng lint
```

---

## Instalación en local🔧

### Requisitos técnicos 📋

- [Node](https://nodejs.org/es/)

- [Angular CLI](https://github.com/angular/angular-cli)

- `Opcional`

  - [http-server](https://www.npmjs.com/package/http-server)

### Clonar repositorio e instalar dependencias 🛠️

```bash
git clone https://github.com/imanolhernando/async-frontend
cd async-frontend
npm install
```

### Servidor desarrollo ⚙️

```bash
npm run start
#or
ng serve
```

Abrir en el navegador [http://localhost:4200](http://localhost:4200)

### Servidor producción ⚙️

Para probar en un servidor de producción una opción es `http-server`

<!-- , se puede comprobar la configuración básica del service-worker e instalar la aplicación. -->

```bash
npm run build:prod
cd dist/async-frontend
http-server
```

Abrir en el navegador [http://localhost:8080](http://localhost:8080)

---

Hecho con 💖🚀 por [Imanol](https://www.linkedin.com/in/imanolhernando/) 😊👋
