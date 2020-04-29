require('dotenv').config();
const mongoose = require('mongoose');
const TeamModel = require('./teamModel');

const insertTeam = async function(team) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
    
    var data = new TeamModel(team);
    var inserted = await data.save();
    
    mongoose.disconnect();

    return inserted;
};

const findTeam = async function(obj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   

    var exist = await TeamModel.findOne(obj);
    
    
    mongoose.disconnect();

    return exist;
};


const listTeams = async function() {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   
    var exist = await TeamModel.find({});   
    
    mongoose.disconnect();

    return exist;
};

const updateTeam = async function(queryObj, updateObj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true })
    
    
    if(updateObj.password)
        updateObj.password = await crypt.hash(updateObj.password, 10);

    await TeamModel.updateOne(queryObj, updateObj);
    
    mongoose.disconnect();

};


module.exports = {insertTeam, findTeam, updateTeam, listTeams};
