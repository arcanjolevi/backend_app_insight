const usersDB = require('../../model/user/usersDB');
const prayDB = require('../../model/pray/prayDB');


module.exports = async (req, res) => {

    
    const pray = await prayDB.findPray({ _id: req.body.prayID });
    console.log(pray);
    if( pray ){

        var user = await usersDB.findUser({ _id: req.userId });
        console.log("Atualizando prays de: ", user.name);

        
        if(!user.prays.includes(pray._id))
            user.prays.push(pray._id);       

    }else{
        return res.status(400).send({ status: 'failed', error: "This pray does not exist"});    
    }    

    try{
        await usersDB.updateUser({ email: user.email}, { prays: user.prays});
        return res.send({ status: 'success', Mensage: "Users prays updated", userPrays: user.prays});
    }catch(error){
        console.log(error);
        return res.send({ status: 'failed', error: "can't update user's prays"});
    }
};