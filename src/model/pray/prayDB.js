require('dotenv').config();
const mongoose = require('mongoose');
const PrayModel = require('./prayModel');


var insertPray = async function(pray) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
        
    var name = pray.title.split(" ").join("_").toLowerCase();
    const obj = {
        name: name,
        title: pray.title,
        description: pray.description,
        team: pray.team,
    }
    var data = new PrayModel(obj);
    var inserted = await data.save();
    
    mongoose.disconnect();

    return inserted;
};

var findPray = async function(obj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   

    var exist = await PrayModel.findOne(obj);
    
    
    mongoose.disconnect();

    return exist;
};

var listPray = async function() {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   

    var exist = await PrayModel.find({});    
    
    mongoose.disconnect();

    return exist;
};

var updatePray = async function(queryObj, updateObj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
    
    await PrayModel.updateOne(queryObj, updateObj);
    
    mongoose.disconnect();

};

const removePray = async function(obj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
      
    await PrayModel.deleteOne(obj);   
    
    mongoose.disconnect();
};

module.exports = { insertPray, updatePray, findPray, listPray, removePray};
