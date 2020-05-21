const userDB = require('../../model/user/usersDB');

module.exports = async (req, res) => {
  const { userID } = req.params;
  if(userID){
    try {
      const user = await userDB.findUser({ _id: userID });
      return res.send(user);
    } catch (e) {
      console.log(e);
    }
  }
  return res.status(400).send({ error: 'cant get user data' });
}