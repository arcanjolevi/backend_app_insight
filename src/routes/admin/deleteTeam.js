const teamDB = require('../../model/team/teamDB');
const userDB = require('../../model/user/usersDB');

module.exports = async (req, res) =>{
  const teamID = req.params.teamID;
  if(teamID){
    try {
      const team = await teamDB.findTeam({ _id: teamID });
      team.teamMembers.forEach(async(i) => {
        await userDB.updateUser({ _id:i }, { team:'' });
      });

      await teamDB.removeTeam( { _id: teamID} );
      return res.send({ status: 'sucess', message: 'Team deleted' });
    } catch (e) {
      console.log('Erro, nao foi possivel eliminar equipe', e);
    }
  }
  console.log('cant remove team');
  return res.status(400).send({ status:'failed', error:'cant remove team' });
} 