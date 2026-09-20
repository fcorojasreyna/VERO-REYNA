# Linktree de Vero Reyna

Landing tipo "linktree" para `linktree.veroreyna.com`, alojada en GitHub Pages.

## Estructura

Todo el proyecto va en **archivos sueltos, sin carpetas** (así se sube bien a GitHub):

- `index.html` — estructura de la página
- `style.css` — estilos y colores
- `links.js` — **aquí se agrega el contenido nuevo** (marcas y enlaces)
- `main.js` — lógica que dibuja las tarjetas en pantalla
- `favicon.svg`, `vero-reyna-photo.jpg`, `mujer-es-evolucion-logo.jpg`, `nextflight-logo.png`, `incruises-logo.webp` — imágenes
- `CNAME` — dominio personalizado para GitHub Pages

## Cómo agregar contenido nuevo

Abre `links.js`. Hay dos formas de agregar algo:

**1. Una marca/negocio nuevo con su propia tarjeta** (como MIA, NextFlight o InCruises) — agrega un objeto al arreglo `BRAND_LINKS`:

```js
{
  title: "Nombre",
  subtitle: "dominio.mujeresevolucion.com",
  description: "Una línea explicando de qué se trata.",
  url: "https://ejemplo.com",
  logo: "mi-logo.png", // sube el logo suelto a la raíz del proyecto primero
  color: "#hexcolor", // color de marca para el borde/acento
}
```

**2. Un enlace dentro del bloque "Mujer es Evolución"** (podcast, redes, etc.) — agrega un objeto al arreglo `links` dentro de `ME_GROUP`:

```js
{
  title: "Nombre del enlace",
  subtitle: "texto opcional debajo del título",
  url: "https://ejemplo.com",
  icon: "link", // opciones: youtube, instagram, ship, plane, sparkle, link
}
```

No hace falta tocar el HTML ni el CSS en ninguno de los dos casos. Cualquier imagen nueva se guarda suelta en la raíz del proyecto (sin carpetas) y se referencia solo por su nombre de archivo, ej. `"mi-logo.png"`.

## Publicar en GitHub Pages

**Importante:** al subir archivos a GitHub (por arrastrar y soltar en la web), sube todos los archivos sueltos directamente — no los metas dentro de una carpeta, porque las carpetas no se cargan bien con ese método.

1. Crea un repositorio en GitHub (público, para poder usar Pages gratis).
2. En el repo, usa **Add file → Upload files** y arrastra todos los archivos sueltos de esta carpeta (incluyendo `CNAME`, que no tiene extensión pero debe subirse igual).
3. En **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
4. En **Settings → Pages → Custom domain**, escribe `linktree.veroreyna.com` y guarda (esto confirma el archivo `CNAME`).
5. En el proveedor DNS de `veroreyna.com`, crea un registro **CNAME**:
   - Host: `linktree`
   - Apunta a: `<tu-usuario>.github.io`
6. Espera la propagación DNS (minutos a horas) y activa "Enforce HTTPS" en Settings → Pages cuando esté disponible.

## Pendiente / personalizar

- Confirmar que los subdominios `mia.mujeresevolucion.com`, `nextflight.mujeresevolucion.com` y `bahamas.mujeresevolucion.com` ya estén activos.
- Confirmar la URL exacta del Instagram personal `@veroreynaoficial` en `index.html`.
