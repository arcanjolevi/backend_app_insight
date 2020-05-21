const userDB = require('../../model/user/usersDB');
const teamDB = require('../../model/team/teamDB');

/*
Request expected:
{
  "userID":"user id here",
	"teamID":"team id here",
	"action":"remove, add"
}
*/
module.exports = async (req, res) => {
	const { userID, teamID, action } = req.body;
	
  if(userID && teamID && action){
		console.log(`Atualizndo team de ${userID} para ${teamID}`);
		try{

			let team = await teamDB.findTeam({ _id: teamID });
			if(!team)
				throw ('Team nao encontrado');

			let user = await userDB.findUser({ _id:userID });
			if(!user)
				throw ('User nao encontrado');

			if(action == 'add'){								
				team.teamMembers.push(userID);
				await teamDB.updateTeam({ _id: teamID }, { teamMembers: team.teamMembers });
				await userDB.updateUser({ _id:userID }, { team:teamID });
			}else{
				await userDB.updateUser({ _id:userID }, { team:'' });
				let v = [];
				team.teamMembers.forEach( i => {
					if(i != userID)
						v.push(i);
				});
				await teamDB.updateTeam({ _id: teamID }, { teamMembers: v });
			}			
			return res.send({ status: 'success', maessage: 'user team updated' });			
		}catch(e){
			console.log('Impossivel atualizar team', e);
		}
	}
	return res.status(400).send({ error:'cant update user team'});
}