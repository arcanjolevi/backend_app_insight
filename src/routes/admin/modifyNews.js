const newsDB = require('../../model/news/newsDB');

/**
 * Requeste expected
 * {
 *  "newsID":"news id here"
 *  "title":"title here",
 *  "body":"body here"
 * }
 */
module.exports = async (req, res) => {

  const { title, body, newsID } = req.body;

  if( title && body && newsID){
    
    try{
      await newsDB.updateNews({ _id: newsID }, { title, body })
    }catch(e){
      console.log(e);
    }

  }

  return res.status(400).send({ error: 'cant update a news'});
}