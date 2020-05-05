const usersDB = require('../../model/user/usersDB');

module.exports = async (req, res) => {    
    
    const prays = req.body.prays;

    if(prays){
        try{
            var user = await usersDB.findUser({ _id: req.userId }); 
            await usersDB.updateUser({ email: user.email}, { prays });
            return res.send({ status: 'success', Mensage: "Users prays updated", userPrays: prays });
        }catch(error){
            console.log(error);
            return res.status(400).send({ status: 'failed', error: "can't update user's prays"});
        }
    }else{
        return res.status(400).send({ status: 'failed', error: "can't update user's prays"});
    }
};