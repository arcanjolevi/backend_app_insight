const teamDB = require('../../model/team/teamDB');

module.exports = async(req, res) =>{    
    
    try{
        await teamDB.insertTeam(req.team);
        const allTeams = await teamDB.listTeams();
        return res.send({ status: 'Success',  allTeams: allTeams });
    }catch(e){
        console.log("ERROR OCURRED: ", e);
        return res.status(400).send({ error: "Cant add team", status: "failed" });
    }

};