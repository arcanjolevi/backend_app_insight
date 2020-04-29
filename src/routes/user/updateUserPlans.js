const usersDB = require('../../model/user/usersDB');
const plansDB = require('../../model/plan/plansDB');


module.exports = async (req, res) => {    

    const step = req.body.step;
    
    var user = await usersDB.findUser({ _id: req.userId });  
    var plan = await plansDB.findPlan({ _id: req.body.planID });
    
    if( step >= 0 && plan && step <= plan.totalSteps){
        console.log("Atualizando planos de: ", user.name);
        
        var flag = false;
        var newPlans = user.plans.map(x => {
            const [pID, pStep] = x.split(',');
            if(pID == plan._id){
                flag = true;
                return pID + ',' + step;
            }
            return x;     
        });
        if(!flag){
            newPlans.push(plan._id + "," + step);
        }
        
    }else{
        return res.status(400).send({ status: 'Failed', error: "can't update user's plans"});
    }  
     

    try{
        await usersDB.updateUser({ email: user.email}, { plans: newPlans });
        return res.send({ status: 'Success', Mensage: "Users plans updated", userPlans: newPlans });
    }catch(error){
        console.log(error);
        return res.status(400).send({ status: 'Failed', error: "can't update user's plans"});
    }
    

};