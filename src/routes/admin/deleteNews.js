const newsDB = require('../../model/news/newsDB');


module.exports = async (req, res) => {
  const { newsID } = req.params;

  if(newsID){
    try{
      await newsDB.removeNews({ _id: newsID });
      return res.send({ status: 'success', message:'news deleted' });
    }catch(e){
      console.log(e);
    }
  }

  return res.status(400).send({ error: 'cant delete news ' });
}