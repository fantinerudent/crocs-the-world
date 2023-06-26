import connection from "../db.cjs";

export const getAllCrocs = (req, res) => {
  connection
    .promise()
    .query("SELECT * FROM croc")
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products from db.");
    });
};

export const getCrocById = (req, res) => {
  const { id } = req.params;
  connection
    .promise()
    .query(`SELECT * FROM croc WHERE id = ${id}`)
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products from db.");
    });
};

export const addNewCroc = (req, res) => {
  // ici je destructure ce que je reçois dans mon req.body;
  const { name, price, description, img_url, color } = req.body;
  console.log(img_url);

  // ici j'isole la requète que je vais envoyer à SQL
  const SQL_query =
    "INSERT INTO croc (name, price, description, img_url, color) VALUES (?, ?, ?, ?, ?)";

  //c'est parti mon kiki, je me connecte à la DB et ...
  connection
    .promise()
    .query(SQL_query, [name, parseInt(price), description, img_url, color])
    .then(([results]) => {
      // ici on va vérifier le nombre de ligne touchée, si c'est une ça veut dire que mon objet a bien été crée en BDD
      if (results.affectedRows === 1) {
        res.status(201).json({ message: "croc added" });
      } else {
        // autrement c'est qu'il y a une erreur.
        res.status(500).json({ message: "error" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products from db.");
    });
};

export const updateCroc = (req, res) => {
  const { id } = req.params;
  const { name, price, description, img_url, color } = req.body;
  // ici j'isole la requète que je vais envoyer à SQL
  const SQL_query =
    "UPDATE croc set name = ?, price = ?, description = ?, img_url = ?, color = ? WHERE id = ? ";
  //c'est parti mon kiki, je me connecte à la DB et ...
  connection
    .promise()
    .query(SQL_query, [
      name,
      parseInt(price),
      description,
      img_url,
      color,
      parseInt(id),
    ])
    .then(([results]) => {
      // ici on va vérifier le nombre de ligne touchée, si c'est une ça veut dire que mon objet a bien été crée en BDD
      if (results.affectedRows === 1) {
        res.status(201).json({ message: "croc updated" });
      } else {
        // autrement c'est qu'il y a une erreur.
        res.status(500).json({ message: "error" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products from db.");
    });
};
