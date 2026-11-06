GRUPO 1
Intregrantes
-Ignacio Fernandez Itusaca Ignacio
-Jasser Rodrigo Caba Murillo
-Harold Yasmani Alvarez Limachi
-Emilio Garcia Burgoa
--Scripts en mongo db-- 

 Consultas de prueba para verificar el funcionamiento
print("\n--- INVENTARIO DE VIDEOS DISPONIBLES ---");
printjson(db.articulos_video.find({ estado: "disponible" }).toArray());

print("\n--- RENTAS ACTIVAS ---");
printjson(db.rentas.find({ estadoRenta: "activo" }).toArray());

print("\n--- RESUMEN DE INGRESOS TOTALES (CONTABILIDAD) ---");
printjson(db.rentas.aggregate([
  { $group: { _id: null, dineroTotalRecibido: { $sum: "$montoPago" } } }
]).toArray());