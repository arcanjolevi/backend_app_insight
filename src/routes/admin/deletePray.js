const prayDB = require('../../model/pray/prayDB');


module.exports = async function(req, res){
  const { prayID } = req.params;

  if(prayID){
    try{
      await prayDB.removePray({ _id: prayID });
      return res.send({ message: 'pray removed' });
    }catch(e){
      console.log(e);
    }
  }
  return res.status(400).send({ error: 'cant delete pray' });
}