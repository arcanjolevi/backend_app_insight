require('dotenv').config();
const mongoose = require('mongoose');
const PlanModel = require('./plansModel');

var insertPlan = async function(plan) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
        
    var name = plan.title.split(" ").join("_").toLowerCase();
    const obj = {
        name: name,
        title: plan.title,
        description: plan.description,
        totalSteps: plan.totalSteps,
        plan: plan.plan
    }
    var data = new PlanModel(obj);
    var inserted = await data.save();
    
    mongoose.disconnect();

    return inserted;
};

var findPlan = async function(obj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   
    var exist = await PlanModel.findOne(obj);
       
    mongoose.disconnect();

    return exist;
};

var listPlans = async function() {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   
    var exist = await PlanModel.find({});    
    
    mongoose.disconnect();

    return exist;
};

var updatePlan = async function(queryObj, updateObj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
    
    await PlanModel.updateOne(queryObj, updateObj);
    
    mongoose.disconnect();
};


module.exports = {insertPlan, findPlan, updatePlan, listPlans};
