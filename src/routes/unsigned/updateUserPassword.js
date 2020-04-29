require('dotenv').config();
const jwt = require('jsonwebtoken');
const usersDB = require('../../model/user/usersDB');

module.exports = async (req, res) => {
    const token = req.body.token;
    const pass = req.body.password;

    if(!token)
        return res.status(401).send({ status: 'Failed', auth: false, error: 'No token provided.' });
  
    jwt.verify(token, process.env.SECRET, async function(err, decoded) {
        if (err) 
            return res.status(401).send({ status: 'Failed', auth: false, error: 'Failed to authenticate token.' });
        
        try {            
            await usersDB.updateUser({ _id: decoded.id}, {password: pass});
        } catch (error) {
            console.log(error);
            return res.status(400).send({ status: 'Failed', error: "password not updated"});
        }
        return res.send({ status: 'Success', Mensage: "Password changed"});
    });

};