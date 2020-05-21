const newsDB = require('../../model/news/newsDB');

/**
 * Requeste expected
 * {
 *  "title":"title here",
 *  "author":"author here",
 *  "body":"body here"
 * }
 */
module.exports = async (req, res) => {
  const { title, body, author } = req.body;
  
  if( title && body && author){    
    try{
      await newsDB.insertNews({ title, body, author });
      return res.send({ message:'new created' });
    }catch(e){
      console.log(e);
    }
  }
  return res.status(400).send({ error: 'cant create a news'});
}