const usersDB = require('../../model/user/usersDB');

module.exports = async (req, res) => {    
    
    const plans = req.body.plans;

    if(plans){
        try{
            var user = await usersDB.findUser({ _id: req.userId }); 
            await usersDB.updateUser({ email: user.email}, { plans: plans });
            return res.send({ status: 'success', Mensage: "Users plans updated", userPlans: plans });
        }catch(error){
            console.log(error);
            return res.status(400).send({ status: 'failed', error: "can't update user's plans"});
        }
    }else{
        return res.status(400).send({ status: 'failed', error: "can't update user's plans"});
    }

    

};