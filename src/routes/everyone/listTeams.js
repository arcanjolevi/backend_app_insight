const teamDB = require('../../model/team/teamDB');

module.exports = async (req, res) => {
    
    const teams = await teamDB.listTeams();
    return res.send( teams );
};