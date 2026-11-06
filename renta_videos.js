GRUPO 1
Intregrantes
-Ignacio Fernandez Itusaca Ignacio
-Jasser Rodrigo Caba Murillo
-Harold Yasmani Alvarez Limachi
-Emilio Garcia Burgoa
--Scripts en mongo db-- 
use renta_videos_db;

'clientes'
db.clientes.insertMany([
  {
    _id: 1,
    nombre: "Ana Pérez",
    telefono: "70123456",
    email: "ana@email.com",
    saldoMensual: 0.00,
    saldoAnual: 0.00
  },
  {
    _id: 2,
    nombre: "Carlos Gómez",
    telefono: "79876543",
    email: "carlos@email.com",
    saldoMensual: 45.00,
    saldoAnual: 120.00
  }
]);
 'articulos_video'
db.articulos_video.insertMany([
  {
    _id: 101,
    titulo: "Matrix",
    genero: "Ciencia Ficción",
    precioAlquiler: 15.00,
    estado: "disponible"
  },
  {
    _id: 102,
    titulo: "El Señor de los Anillos",
    genero: "Fantasía",
    precioAlquiler: 20.00,
    estado: "rentado"
  }
]);

 'rentas'
db.rentas.insertMany([
  {
    _id: 1001,
    idCliente: 1,
    idArticulo: 101,
    fechaRenta: new Date("2026-11-01"),
    montoPago: 15.00,
    estadoRenta: "activo"
  },
  {
    _id: 1002,
    idCliente: 2,
    idArticulo: 102,
    fechaRenta: new Date("2026-10-15"),
    montoPago: 20.00,
    estadoRenta: "retornado"
  }
]);

