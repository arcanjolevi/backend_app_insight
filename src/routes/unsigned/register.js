const usersDB = require('../../model/user/usersDB');
const myToken = require('../../util/token');
const config = require('../../config/config.json');


module.exports = async (req, res) =>{
    try{
        if(await usersDB.findUser({ email: req.body.email }))
            return res.status(400).send({ status: 'Failed', error: "user already exists"});

        var user = await usersDB.insertUser(req.body);

        console.log('registrando... ', user.name);

        user.password = "";

        var tok = myToken.generateToken(user._id, config.TOKEN_TIME);

        return res.send({ status: 'Success', user, token: tok});
    }catch(error){
        console.log(error);
        return res.status(400).send({ status: 'Failed', error: "Registration fail" });
    }
};