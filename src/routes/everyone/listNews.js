const newsDB = require('../../model/news/newsDB');

module.exports = async(req, res) =>{
    
    const news = await newsDB.listNews();
    return res.send(news);
};