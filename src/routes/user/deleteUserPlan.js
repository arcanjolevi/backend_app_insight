const usersDB = require('../../model/user/usersDB');



module.exports = async (req, res) => {    


    const planID = req.body.planID;

    var user = await usersDB.findUser({ _id: req.userId });      

    console.log("Deletando plano de: ", user.name);
        
    var newPlans = [];
    user.plans.forEach( x => {
        const [pID, step] = x.split(',');
        if(pID != planID)
            newPlans.push(x);
    });
    user.plans = newPlans;
    

    try{
        await usersDB.updateUser({ email: user.email}, { plans: user.plans });
        return res.send({ status: 'Success', Mensage: "Users plans updated", userPlans: user.plans});
    }catch(error){
        console.log(error);
        return res.satus(400).send({ status: 'Failed', error: "can't update user's plans"});
    }
    

};