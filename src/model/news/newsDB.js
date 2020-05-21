require('dotenv').config();
const mongoose = require('mongoose');
const newsModel = require('./newsModel');

const insertNews = async function(news) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
    
    var data = new newsModel(news);
    var inserted = await data.save();
    
    mongoose.disconnect();

    return inserted;
};

const findNews = async function(obj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   

    var exist = await newsModel.findOne(obj);
    
    
    mongoose.disconnect();

    return exist;
};


const listNews = async function() {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   
    var exist = await newsModel.find({});   
    
    mongoose.disconnect();

    return exist;
};

const updateNews = async function(queryObj, updateObj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true })
 
    await newsModel.updateOne(queryObj, updateObj);
    
    mongoose.disconnect();

};

const removeNews = async function(obj) {
    await mongoose.connect(process.env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
      
    await newsModel.deleteOne(obj);   
    
    mongoose.disconnect();
};


module.exports = {insertNews, findNews, updateNews, listNews, removeNews};
