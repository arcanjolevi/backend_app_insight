const planDB = require('../../model/plan/plansDB');

module.exports = async(req, res) =>{    
    
    try{
        await planDB.insertPlan(req.body);
        const allPlans = await planDB.listPlans();
        return res.send({ status: 'Success',  allPlans: allPlans });
    }catch(e){
        console.log("ERROR OCURRED: ", e);
        return res.status(400).send({ error: "Cant add plan", status: "failed" });
    }

};