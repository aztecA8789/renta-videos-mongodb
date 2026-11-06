# renta-videos-mongodb
base de datos en mongo db grupo 1
# Renta de Videos con MongoDB
## Grupo 1

### Integrantes

* Ignacio Fernandez Itusaca
* Jasser Rodrigo Caba Murillo
* Harold Yasmani Alvarez Limachi
* Emilio Garcia Burgoa

---

## Descripción

Base de datos en MongoDB para una tienda de renta de videos. Guarda los clientes, las peliculas del inventario y las rentas que se hacen, y permite consultar qué hay disponible, qué rentas siguen activas y cuánto dinero se ha recibido.

## Colecciones

### clientes

* `_id`
* `nombre`
* `telefono`
* `email`
* `saldoMensual`
* `saldoAnual`

### articulos_video

* `_id`
* `titulo`
* `genero`
* `precioAlquiler`
* `estado` (disponible / rentado)

### rentas

* `_id`
* `idCliente`
* `idArticulo`
* `fechaRenta`
* `montoPago`
* `estadoRenta` (activo / retornado)

## Archivos del repositorio

* `renta_videos.js`: crea la base de datos y llena las tres colecciones.
* `consultas.js`: consultas para comprobar que todo funciona.

## Pasos para implementarlo

1. Instalar MongoDB y MongoDB Compass.
2. Abrir Compass y conectarse a `mongodb://localhost:27017`.
3. Abrir la consola `>_MONGOSH`.
4. Copiar y ejecutar el contenido de `renta_videos.js`.
5. Copiar y ejecutar el contenido de `consultas.js`.

También se pueden correr desde la terminal:

```bash
mongosh --file renta_videos.js
mongosh --file consultas.js
```

## Capturas

### 1. Creación de la colección clientes

* Se usa la base de datos y se insertan 2 clientes con `insertMany`.
* Aparece `acknowledged: true` y la colección se ve en el panel izquierdo.

<img width="1366" height="768" alt="WhatsApp Image 2026-11-06 at 8 08 23 AM" src="https://github.com/user-attachments/assets/74d6123b-73da-41e0-8af4-f3325c232cd8" />

### 2. Creación de la colección articulos_video

* Se insertan 2 películas, una disponible y otra rentada.

<img width="1366" height="768" alt="WhatsApp Image 2026-11-06 at 8 07 16 AM" src="https://github.com/user-attachments/assets/50fbcbb3-4378-4dd1-b2e6-cbe96f197129" />

### 3. Creación de la colección rentas

* Se insertan 2 rentas que enlazan a un cliente con una película.
* Una está activa y la otra retornada.

<img width="1366" height="768" alt="WhatsApp Image 2026-11-06 at 8 05 10 AM" src="https://github.com/user-attachments/assets/4cb55d84-356b-40ce-8ec0-6dffa4f97754" />

### 4. Consulta: videos disponibles

* Muestra solo las películas con `estado: "disponible"`.

<img width="1366" height="768" alt="WhatsApp Image 2026-11-06 at 8 00 15 AM" src="https://github.com/user-attachments/assets/48e9b94d-3eae-4690-9fca-6e3485a9122b" />
### 5. Consulta: rentas activas e ingresos totales

* Muestra las rentas con `estadoRenta: "activo"`.
* Suma todos los pagos con `aggregate` y `$group`.

<img width="1355" height="765" alt="WhatsApp Image 2026-11-06 at 7 51 54 AM" src="https://github.com/user-attachments/assets/6d81150a-7688-43fc-8a89-6bf6175f5a76" />

## Resultados

* Videos disponibles: **1**
* Rentas activas: **1**
* Dinero total recibido: **35**
