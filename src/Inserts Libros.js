Inserts

/*Insertar sólo un documento a la colección*/

db.libros.deleteMany({})
db.libros.insertOne({item: { Título: "Los asesinos del emperador",
                             Volumen: 1, Autor: "Santiago Posteguillo", 
                             Año:2013, 
                             ISBN: "978-84-08-11832-9"}, 
                             genero: "Novela Histórica", 
                             status: "leído", 
                             tags: ["Trajano", "Trilogía", "Roma"]
                            })


 /* Insertar varios a la vez */

 db.libros.deleteMany({})
 db.libros.insertMany([
                        {item: { Título: "Los asesinos del emperador",
                             Volumen: 1, Autor: "Santiago Posteguillo", 
                             Año:2013, 
                             ISBN: "978-84-08-11832-9"}, 
                             Género: "Novela Histórica", 
                             Estado: "Leyendo", 
                             tags: ["Trajano", "Trilogía", "Roma"]
                        },

                        {item: {Título: "Circo Máxmo",
                            Volumen:2, Autor: "Santiago Posteguillo",
                            Año: 2015,
                            ISBN: "978-84-08-14177-8"},
                            Género: "Novela Histórica",
                            Estado: "No leído",
                            tags: ["Trajano", "Trilogía", "Roma"]
                        },

                        {item: {Título: "La legión perdida",
                            Volumen:3, Autor: "Santiago Posteguillo",
                            Año: 2017,
                            ISBN: "978-84-08-17637-4"},
                            Género: "Novela Histórica",
                            Estado: "No leído",
                            tags: ["Trajano", "Trilogía", "Roma"]
                        },

                        {item: {Título: "Yo, Julia",
                            Volumen: 1, Autor: "Santiago Posteguillo",
                            Año:2018,
                            ISBN: "978-84-08-19740-9"},
                            Género: "Novela Histórca",
                            Estado: "Leído",
                            tags: ["Julia", "Domna", "Roma"]
                        },

                        {item: {Título: "Y Julia retó a los dioses",
                            Volumen:2, Autor: "Santiago Posteguillo",
                            Año:2020,
                            ISBN: "978-84-08-22469-3"},
                            Género: "Novela Histórica",
                            Estado: "No leído",                     
                            tags: ["Julia", "Domna", "Roma"]
                        },

                        {item: {Título: "Carlomagno",
                            Autor: "Harold Lamb",
                            Año:1946,
                            ISBN:"84-9815-248-8"},
                            Género: "Documental Histórica",
                            Estado: "No leído",
                            tags: ["Carlomagno", "Biografía"]
                        },

                        {item: {Título: "Los últimos días de Pompeya",
                            Autor: "E.G. BulWer-Lyiton",
                            Año:1834,
                            ISBN: "84-9815-243-7"},
                            Género: "Novela Histórica",
                            Estado: "No leído",
                            tags: ["Pompeya", "Grecia"]
                        },

                        {item: {Título: "Los Idus de Marzo",
                            Autor: "Thornton Wilder",
                            Año: 1948,
                            ISBN: "84-9815-247-X"},
                            Género: "Novela histórica",
                            Estado: "No leído",
                            tags: ["Julio Cesar", "Roma"]
                        },

                        {item: {Título: "Espartaco",
                            Autor: "Howard Fast",
                            Año: 1951,
                            ISBN: "84-9815-221-6"},
                            Género: "Documental histórica",
                            Estado: "No leído",
                            tags: ["Espartaco", "Tracia"]
                        },

                        {item: {Título: "Quo Vadis?",
                            Autor: "Henryk SienkieWicz",
                            Año: 1896,
                            ISBN: "84-9815-219-4"},
                            Género: "Novela histórica",
                            Estado: "No leído",
                            tags: ["Nerón", "Roma"]
                        },

                        {item: {Título: "Ben Hur",
                           Autor: "Lewis  Wallace",
                           Año: 1880,
                           ISBN: "84-9815-217-8"},
                           Género: "Novela histórica",
                           Estado: "No leído",
                           tags: ["Jerusalem", "Roma"]
                        },

                        {item: {Título: "Tiberio",
                           Autor: "Allan Masier",
                           Año: 1948,
                           ISBN: "84-9815-235-6"},
                           Género: "Documental histórica",
                           Estado: "No leído",
                           tags: ["Tiberio", "Roma"]
                        }
                    ])

/* Borrar elementos de la colección*/

db.libros.deleteMany({})