const teamDB = require('../../model/team/teamDB');
/*
req body expected

{
  "teamID":"id here",
  "teamMembers":[]
}
*/

module.exports = async(req, res) =>{    
    const { teamID, teamMembers }= req.body;

    if(!teamID ||  !teamMembers){
      return res.status(400).send({ status: 'failed' });
    }

    try{
        await teamDB.updateTeam({ _id: teamID }, { teamMembers });
        const team = await teamDB.findTeam({ _id: teamID });
        return res.send({ status: 'Success', team });
    }catch(e){
        console.log("ERROR OCURRED: ", e);
        return res.status(400).send({ error: "Cant update team", status: "failed" });
    }

};