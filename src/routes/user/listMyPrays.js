const prayDB = require('../../model/pray/prayDB');
const userDB = require('../../model/user/usersDB');


module.exports = async(req, res) =>{
    
    try{
        const user = await userDB.findUser({ _id: req.userId });
        var userPrays = user.prays.map( p => {
            return {
                prayID: p
            }
        });
        if(!userPrays[0])
            userPrays = [];    
        return res.send({ status: 'Success',  userPrays: userPrays });
    }catch(e){
        console.log(e);
        return res.status(400).send({ status: 'failed'});
    }
};