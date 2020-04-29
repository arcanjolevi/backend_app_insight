const plansDb = require('../../model/plan/plansDB');

module.exports = async(req, res) =>{
    
    const plans = await plansDb.listPlans();
    return res.send(plans);
};