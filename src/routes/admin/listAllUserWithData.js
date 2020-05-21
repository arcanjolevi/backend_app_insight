const userDB = require('../../model/user/usersDB');

module.exports = async(req, res) =>{    
  const users = await userDB.listUsers();
  return res.send(users);
};
