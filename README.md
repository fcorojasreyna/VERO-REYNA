# Linktree de Vero Reyna

Landing tipo "linktree" para `linktree.veroreyna.com`, alojada en GitHub Pages.

## Estructura

- `index.html` — estructura de la página
- `css/style.css` — estilos y colores
- `js/links.js` — **aquí se agregan los enlaces nuevos** (cada uno es un objeto en el arreglo)
- `js/main.js` — lógica que dibuja los enlaces en pantalla
- `assets/` — logo, favicon, foto de perfil
- `CNAME` — dominio personalizado para GitHub Pages

## Cómo agregar un enlace nuevo

Abre `js/links.js` y agrega un objeto al arreglo `LINKS`:

```js
{
  title: "Nombre del enlace",
  subtitle: "texto opcional debajo del título",
  url: "https://ejemplo.com",
  icon: "link", // opciones: youtube, instagram, ship, plane, sparkle, link
}
```

No hace falta tocar el HTML ni el CSS.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (público, para poder usar Pages gratis).
2. Sube estos archivos:
   ```bash
   git init
   git add .
   git commit -m "Landing inicial de linktree"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git push -u origin main
   ```
3. En el repo de GitHub: **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
4. En **Settings → Pages → Custom domain**, escribe `linktree.veroreyna.com` y guarda (esto confirma el archivo `CNAME`).
5. En el proveedor DNS de `veroreyna.com`, crea un registro **CNAME**:
   - Host: `linktree`
   - Apunta a: `<tu-usuario>.github.io`
6. Espera la propagación DNS (minutos a horas) y activa "Enforce HTTPS" en Settings → Pages cuando esté disponible.

## Pendiente / personalizar

- Cambiar el avatar (círculo con iniciales "VR") por una foto real en `assets/` y actualizar `index.html`.
- Confirmar que los subdominios `mia.mujeresevolucion.com`, `nextflight.mujeresevolucion.com` y `bahamas.mujeresevolucion.com` ya estén activos.
- Ajustar colores en `css/style.css` (`:root`) si tienes una paleta de marca definida.
