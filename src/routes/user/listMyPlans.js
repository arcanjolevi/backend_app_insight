const plansDb = require('../../model/plan/plansDB');
const userDB = require('../../model/user/usersDB');


module.exports = async(req, res) =>{


    try {
        

        const user = await userDB.findUser({ _id: req.userId });       
        
        var userPlans = user.plans.map( p => {
            var [ planID, step ] = p.split(',');
            return {
                planID: planID,
                planStep: step
            }
        });

        if(!userPlans[0])
            userPlans = [];

        return res.send({ status: 'Success', userPlans: userPlans });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ status: 'feiled' });
    }
    
    
};