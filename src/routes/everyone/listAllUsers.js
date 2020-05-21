const userDB = require('../../model/user/usersDB');

module.exports = async(req, res) =>{
    
  const users = await userDB.listUsers();
  let v = [];
  users.forEach( u => {
	let haveTeam = (u.team !== '');
	v.push({
    _id: u._id,
    name: u.name,
      course: u.course,
	  haveTeam
      })
  });
  return res.send(v);
};
