require('dotenv').config();
const mongoose = require('mongoose');
const UserModel = require('./userModel');
const crypt = require('bcryptjs');


var insertUser = async function(user) {
    
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
    
    user.password = await crypt.hash(user.password, 10);
    
    var data = new UserModel(user);
    var inserted = await data.save();
    
    mongoose.disconnect();

    return inserted;
};

var findUser = async function(obj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
    
    var exist = await UserModel.findOne(obj);
    
    mongoose.disconnect();

    return exist;
};

var updateUser = async function(queryObj, updateObj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true })
    
    
    if(updateObj.password)
        updateObj.password = await crypt.hash(updateObj.password, 10);

    await UserModel.updateOne(queryObj, updateObj);
    
    mongoose.disconnect();

};

const listUsers = async function() {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   
    var exist = await UserModel.find({});   
    
    mongoose.disconnect();

    return exist;
};


module.exports = {insertUser, findUser, updateUser, listUsers};
