require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateToken( userID, time){
    return jwt.sign({ id: userID }, process.env.SECRET, {
        expiresIn: time
    });
}



module.exports = { generateToken };
