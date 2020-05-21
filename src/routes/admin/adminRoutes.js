const addNewPlan = require('./addNewPlan');
const addNewPray = require('./addNewPray');
const addNewTeam = require('./addNewTeam');
const modifyTeam = require('./modifyTeam');
const deleteTeam = require('./deleteTeam');
const updateTeamMembers = require('./updateTeamMembers');
const updateMemberTeam = require('./updateMemberTeam');
const listMembersWithoutTeam = require('./listMembersWithoutTeam');
const listAllUserWithData = require('./listAllUserWithData');
const newAdmin = require('./newAdmin');
const createNews = require('./createNews');
const deleteNews = require('./deleteNews');
const modifyNews = require('./modifyNews');
const auth = require('./auth');
const deletePray = require('./deletePray');

module.exports = {
  addNewPlan,
  addNewPray,
  addNewTeam,
  modifyTeam,
  deleteTeam,
  updateTeamMembers,
  updateMemberTeam,
  listMembersWithoutTeam,
  listAllUserWithData,
  newAdmin,
  createNews,
  deleteNews,
  modifyNews,
  auth,
  deletePray
}