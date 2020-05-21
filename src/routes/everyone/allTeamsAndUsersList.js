const teamDB = require('../../model/team/teamDB');
const userDB = require('../../model/user/usersDB');

module.exports = async (req, res) => {
    
    
    try{
      const teams = await teamDB.listTeams();
      const users = await userDB.listUsers();

      let teamsData = [];
      teams.forEach(i => {
        let v = [];
        i.teamMembers.forEach(j => {
          users.forEach(k => {
            if(k._id == j){
              v.push({
                _id: k._id,
                name: k.name,
                course: k.course,
                institution: k.institution,
                email: k.email              
              });
            }
          });
        });
        teamsData.push({
          teamInfo: i,
          teamMembersData: v
        });
      });

      return res.send( teamsData );
    }catch(e){
      console.log(e);
    }
    return res.status(500).send({ error: 'cant generate data' });    
};