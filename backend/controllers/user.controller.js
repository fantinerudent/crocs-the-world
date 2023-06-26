import connection from "../db.cjs";
import chalk from "chalk";

export const createUser = (req, res) => {
    const { firstname, lastname, email, city, language, hashedPassword } = req.body;
    const SQL_query =
        "INSERT INTO users set firstname = ?, lastname = ?, email = ?, city = ?, language = ?, password = ?";
    connection
        .promise()
        .query(SQL_query, [
            firstname, lastname, email, city, language, hashedPassword
        ])
        .then(([results]) => {
            if (results.affectedRows === 1) {
                res.status(201).json({ message: "user created" });
            } else {

                res.status(500).json({ message: "error" });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving products from db.");
        });
}

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}

export const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    connection.promise()
        .query("select id, firstname, lastname, email, city, language from users where id = ?", [id])
        .then(([users]) => {
            if (users[0] != null) {
                res.json(users[0]);
            } else {
                res.status(404).send("Not Found");
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving data from database");
        });
};


export const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
    const { email } = req.body;
    connection.promise()
      .query("select * from users where email = ?", [email])
      .then(([users]) => {
          if (users[0] != null) {
          req.user = users[0];
          next();
        } else {
          res.sendStatus(401);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
      });
  };
 
  