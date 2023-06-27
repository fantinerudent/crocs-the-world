
const argon2 = require("argon2");
require('dotenv').config();


const jwt = require('jsonwebtoken')

const { JWT_SECRET, JWT_EXPIRESIN, JWT_SECURE, JWT_COOKIE_MAXAGE } = process.env;

const createToken = (req, res) => {

    const { id, role } = req.user;

    jwt.sign(
        { id, role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRESIN },
        (err, token) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            } else {
                res
                    .cookie("jwtToken", token, {
                        httpOnly: true,               
                    })
                    .json(req.body);
            }
        }
    );

}

const hashPassword = (req, res, next) => {
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


const verifyPassword = (req, res, next) => {
    argon2
        .verify(req.user.password, req.body.password)
        .then((isVerified) => {
            if (isVerified) {
    
                res.send("Credentials are valid");
                next();
            } else {
                res.sendStatus(401);
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
};

module.exports = {
    createToken, verifyPassword, hashPassword
}