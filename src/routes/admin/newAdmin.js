const userDB = require('../../model/user/usersDB');

module.exports = async (req, res) =>{
  const { userID } = req.params;
  try {
    await userDB.updateUser({ _id:userID }, { admin:true });
    return res.send({ status: 'success', message: 'new admin added' });
  } catch (e) {
      console.log(`Erro, nao foi possivel dar admin para ${userID}`, e);
  }  
  return res.status(400).send({ status:'failed' });
} 