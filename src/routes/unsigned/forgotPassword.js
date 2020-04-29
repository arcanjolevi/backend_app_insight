const usersDB = require('../../model/user/usersDB');
const jwToken = require('../../util/token');
const mail = require('../../mail/mail');

const config = require('../../config/config.json');



module.exports = async (req, res) => {
    const email = req.body.email;

    const user = await usersDB.findUser( {email: email} );   
    
    if(!user)
        return res.status(400).send({ status: 'failed', error: "User not found"});
    
    const token = jwToken.generateToken(user._id, config.RECOVERY_PASS_TIME);

    //return res.send({ status: 'success', warning: "Configure os emails", token: token});
    try {
        await mail.sendRecoveryEmail(token, email, user.name);
        return res.send({ status:'success', Mensage: "Email enviado"});
    } catch (error) {
        console.log(error);
        return res.send({ status: 'failed', error: "Email not sent"});
    }
}