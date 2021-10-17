Consultas

/* Para buscar en una colección todos los libros existentes en la colección */

db.libros.find({})

/* Buscar todos los libros con estado leído*/

db.libros.find({Estado: "Leído"})

/*Todos los libros con el tag biografía */

db.libros.find({tags: {$elemMatch:{$eq:"Biografía"}}})

/* Libros cuyo año sea igual a 2020 */

db.libros.find({año: {$eq:2020}})

/* Libros que tengan "84-9815-247-X" de ISBN */

db.libros.find({"item.ISBN":{$eq:"84-9815-247-X"}})

