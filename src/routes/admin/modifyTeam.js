const teamDB = require('../../model/team/teamDB');
/*
req body expected

{
  "teamID":"id here",
  "name":"name here",
  "institution": "insitution here",
  "description":"description here"
}
*/

module.exports = async(req, res) =>{    
    const { name, teamID, institution, description }= req.body;

    if(!name || !teamID ||  !institution ||  !description){
      return res.status(400).send({ status: 'failed' });
    }

    try{
        await teamDB.updateTeam({ _id: teamID }, { name, institution, description});
        const team = teamDB.findTeam({ _id: teamID });
        return res.send({ status: 'Success', team });
    }catch(e){
        console.log("ERROR OCURRED: ", e);
        return res.status(400).send({ error: "Cant update team", status: "failed" });
    }

};