const userDB = require('../../model/user/usersDB');

module.exports = async (req, res) => {
  const { userID } = req.params;
  if(userID){
    try {
      const user = await userDB.findUser({ _id: userID });
      return res.send({
        name: user.name,
        _id: user._id,
        team: user.team,
        admin: user.admin
      });
    } catch (e) {
      console.log(e);
    }
  }
  return res.status(400).send({ error: 'cant get user data' });
}