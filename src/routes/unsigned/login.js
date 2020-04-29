const express = require('express');
const bcrypt = require('bcryptjs');
const myToken = require('../../util/token');
const usersDB = require('../../model/user/usersDB');
const config = require('../../config/config.json');

module.exports = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(`${email} Logando...`);

    const user = await usersDB.findUser( {email: email} );   

    if(!user)
        return res.status(400).send({ status: 'failed', error: "User not found"});

    if(! await bcrypt.compare(password, user.password))
        return res.status(400).send({ status: 'failed', error: "Invalidad Pasword"});

    user.password = "";
    return res.send({ status: 'success', user , token: myToken.generateToken(user._id, config.TOKEN_TIME) });
};