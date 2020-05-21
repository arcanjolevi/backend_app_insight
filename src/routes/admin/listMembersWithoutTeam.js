const userDB = require('../../model/user/usersDB');

module.exports = async(req, res) =>{
    
  const users = await userDB.listUsers();
	let v = [];
  users.forEach( u => {
		if(u.team.length === 0)
			v.push({
  		  _id: u._id,
  		  name: u.name,
				course: u.course,
  		})
  });
  return res.send(v);
};
