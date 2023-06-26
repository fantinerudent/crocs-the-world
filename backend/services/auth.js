import argon2 from "argon2";

export const hashPassword = (req, res, next) => {
    argon2
        .hash(req.body.password, {
            type: argon2.argon2d,
            memoryCost: 2 ** 16,
            hashLength: 50,
        })
        .then((hashedPassword) => {
            req.body.hashedPassword = hashedPassword;
            delete req.body.password;
            next();
        })
        .catch((err) => {
            console.error(err);
        })
};


export const verifyPassword = (req, res) => {
    argon2
        .verify(req.user.password, req.body.password)
        .then((isVerified) => {
            if (isVerified) {
                res.send("Credentials are valid");
            } else {
                res.sendStatus(401);
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
};