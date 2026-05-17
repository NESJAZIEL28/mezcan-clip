# MezcanClip Android APK (Capacitor)

APK de Android para **MezcanClip** usando Capacitor. La app carga directamente desde `https://iptv-player-plus.replit.app/mezcan-clip` en un WebView nativo.

## Como construir el APK

### Paso 1 — Agregar el workflow de GitHub Actions

Crea el archivo `.github/workflows/build-android.yml` con el contenido del archivo `build-android-workflow.yml` de este repositorio.

Puedes hacerlo desde la interfaz web de GitHub:
1. Ve a este repositorio en GitHub
2. Haz clic en **"Add file"** > **"Create new file"**
3. Escribe `.github/workflows/build-android.yml` como nombre
4. Pega el contenido de `build-android-workflow.yml`
5. Haz commit

### Paso 2 — Ejecutar el build

El workflow se ejecuta automáticamente al hacer push a `main`.
O ve a **Actions** > **"Build MezcanClip Android APK"** > **"Run workflow"**.

### Paso 3 — Descargar el APK

El APK estara disponible en:
- **Actions** > el run > **Artifacts** > `MezcanClip-APK`
- O en la seccion **Releases** del repositorio

## Instalacion en Android

1. Descarga el archivo `MezcanClip-v1.0.0.apk`
2. En tu Android: **Ajustes > Seguridad > Instalar apps desconocidas** > Activar
3. Abre el APK y sigue los pasos de instalacion
4. Inicia sesion con tus credenciales MezcanTV

## Requisitos

- Android 7.0 (API 24) o superior
- Conexion a internet (la app carga desde el servidor)

## Configuracion Capacitor

La app esta configurada en `capacitor.config.ts` para cargar:
```
https://iptv-player-plus.replit.app/mezcan-clip
```

Para cambiar la URL del servidor, edita `capacitor.config.ts`.