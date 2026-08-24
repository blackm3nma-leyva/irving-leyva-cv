# Publicación en GitHub Pages

Este proyecto incluye un flujo de GitHub Actions que compila el sitio estático con la ruta base correcta para `https://blackm3nma-leyva.github.io/irving-leyva-cv/` y publica el directorio `dist/public`.

También se incluye una copia estática en la raíz del repositorio (`index.html` y `assets/`) para que el modo actual de GitHub Pages, configurado como **Deploy from a branch → main → /(root)**, encuentre el archivo inicial y deje de mostrar el 404.

Como mejora futura, en el repositorio abra **Settings → Pages** y seleccione **GitHub Actions** como fuente de publicación. Después de que el flujo `Desplegar en GitHub Pages` termine correctamente, los siguientes cambios enviados a la rama `main` actualizarán el sitio automáticamente sin requerir una copia estática en la raíz.
