const usersDB = require('../../model/user/usersDB');

module.exports = async (req, res) => {

    const prayID = req.body.prayID;
    
    var user = await usersDB.findUser({ _id: req.userId });      

    console.log("Deletando " + prayID + " de: ", user.name);

    var newPrays = [];

    user.prays.forEach(x => {       
        if(x != prayID)
            newPrays.push(x);
    });
   
    user.prays = newPrays;
    
    try{
        await usersDB.updateUser({ email: user.email}, { prays: user.prays});
        return res.send({ status: 'success', Mensage: "Users prays updated", userPrays: user.prays });
    }catch(error){
        console.log(error);
        return res.send({ status: 'failed', error: "can't update user's prays"});
    }
};