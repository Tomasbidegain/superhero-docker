var ObjectId = require('mongodb').ObjectId;
const { client } = require("../mongo/index");

const getSuperHero = (req, res) => {
  const { id } = req.body;

  const db = client.db(); // Obtener la instancia de la base de datos desde el objeto client

  db.collection("super_heroe")
    .findOne({ _id: new ObjectId(id)})
    .then((superhero) => {
      if (!superhero) {
        res.status(404).json({ error: "Superhéroe no encontrado" });
        return;
      }
      else res.json(superhero);
    })
}

const getAllSuperHeroes = (req, res) => {
  const db = client.db(); // Obtenemos la instancia de la base de datos desde el objeto client

  db.collection("super_heroe")
    .find()
    .toArray()
    .then((superheroes) => {
      res.json(superheroes);
    })
    .catch((error) => {
      console.error("Error al obtener los superhéroes:", error);
      res.status(500).json({ error: "Error al obtener los superhéroes" });
    });
};

const getAllMarvel = (req, res) => {
  const db = client.db(); // Obtenemos la instancia de la base de datos desde el objeto client

  db.collection("super_heroe")
    .find({ casa: "Marvel" })
    .toArray()
    .then((superheroes) => {
      res.json(superheroes);
    })
    .catch((error) => {
      console.error("Error al obtener los superhéroes de marvel:", error);
      res
        .status(500)
        .json({ error: "Error al obtener los superhéroes de Marvel" });
    });
};

const getAllDc = (req, res) => {
  const db = client.db(); // Obtenemos la instancia de la base de datos desde el objeto client

  db.collection("super_heroe")
    .find({ casa: "dc" })
    .toArray()
    .then((superheroes) => {
      res.json(superheroes);
    })
    .catch((error) => {
      console.error("Error al obtener los superhéroes de DC:", error);
      res.status(500).json({ error: "Error al obtener los superhéroes de DC" });
    });
};

const filterSuperHeroes = (req, res) => {
  const { nombre, casa } = req.body; // Obtener el parámetro de consulta "nombre"

  const db = client.db(); // Obtener la instancia de la base de datos desde el objeto client

  const filter = {}; // Objeto para almacenar los criterios de filtro

  if (nombre) {
    filter.nombre = { $regex: nombre, $options: "i" };
  }

  if (casa) {
    filter.casa = casa;
  }

  db.collection("super_heroe")
    .find(filter)
    .toArray()
    .then((superheroes) => {
      res.json(superheroes);
    })
    .catch((error) => {
      console.error("Error al filtrar los superhéroes:", error);
      res.status(500).json({ error: "Error al filtrar los superhéroes" });
    });
};

const createSuperHero = (req, res) => {
  const {
    nombre,
    nombrePersonaje,
    añoAparicion,
    casa,
    biografia,
    equipamiento,
    images_url
  } = req.body;

  const superhero = {
    nombre,
    nombrePersonaje,
    añoAparicion,
    casa,
    biografia,
    equipamiento,
    images_url
  };

  const db = client.db();

  db.collection("super_heroe")
    .insertOne(superhero)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error("Error al crear el superhéroe:", error);
      res.status(500).json({ error: "Error al crear el superhéroe" });
    });

  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, 'uploads')
  //   },
  //   filename: function (req, file, cb) {
  //     const filename = `${Date.now()}-${file.originalname}`;
  //     images_url.push(filename);  
  //     cb(null, filename);
  //   },
  // });
  
  // const upload = multer({ storage: storage }).array("images");

  // upload(req, res, (err) => {
  //   if (err) {
  //     console.error("Error al subir las imágenes:", err);
  //     res.status(500).json({ error: "Error al subir las imágenes" });
  //   } else {
      
  //   }
  // });
};

const updateSuperHero = (req, res) => {
  const {
    nombre,
    nombrePersonaje,
    añoAparicion,
    casa,
    biografia,
    equipamiento,
    cantidadImagenes,
    id
  } = req.body;

  const db = client.db(); // Obtener la instancia de la base de datos desde el objeto client

  db.collection("super_heroe")
    .findOne({ _id: new ObjectId(id)})
    .then((superhero) => {
      if (!superhero) {
        res.status(404).json({ error: "Superhéroe no encontrado" });
        return;
      }

      // Construir objeto con las propiedades a actualizar
      const updateData = {};
      if (nombre) updateData.nombre = nombre;
      if (nombrePersonaje) updateData.nombrePersonaje = nombrePersonaje;
      if (añoAparicion) updateData.añoAparicion = añoAparicion;
      if (casa) updateData.casa = casa;
      if (biografia) updateData.biografia = biografia;
      if (equipamiento) updateData.equipamiento = equipamiento;
      if (cantidadImagenes) updateData.cantidadImagenes = cantidadImagenes;

      db.collection("super_heroe")
        .updateOne({_id: new ObjectId(id) }, { $set: updateData })
        .then(() => {
          res.json({ message: "Superhéroe actualizado correctamente" });
        })
        .catch((error) => {
          console.error("Error al actualizar el superhéroe:", error);
          res.status(500).json({ error: "Error al actualizar el superhéroe" });
        });
    })
    .catch((error) => {
      console.error("Error al obtener el superhéroe:", error);
      res.status(500).json({ error: "Error al obtener el superhéroe" });
    });
};

const deleteSuperHero = (req, res) => {
  const { id } = req.body;

  const db = client.db(); // Obtener la instancia de la base de datos desde el objeto client

  db.collection("super_heroe")
    .findOne({ _id: new ObjectId(id)})
    .then((superhero) => {
      if (!superhero) {
        res.status(404).json({ error: "Superhéroe no encontrado" });
        return;
      }

      db.collection("super_heroe")
        .deleteOne({_id: new ObjectId(id) })
        .then(() => {
          res.json({ message: "Superhéroe eliminado correctamente" });
        })
        .catch((error) => {
          console.error("Error al actualizar el superhéroe:", error);
          res.status(500).json({ error: "Error al eliminar el superhéroe" });
        });
    })
    .catch((error) => {
      console.error("Error al obtener el superhéroe:", error);
      res.status(500).json({ error: "Error al obtener el superhéroe" });
    });
};

module.exports = {
  getSuperHero,
  getAllSuperHeroes,
  getAllMarvel,
  getAllDc,
  filterSuperHeroes,
  createSuperHero,
  updateSuperHero,
  deleteSuperHero
};
