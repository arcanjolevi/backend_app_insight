const auth = require('./auth');
const deleteUserPlan = require('./deleteUserPlan');
const deleteUserPray = require('./deleteUserPray');
const listMyPlans = require('./listMyPlans');
const listMyPrays = require('./listMyPrays');
const updateAllUserPlans = require('./updateAllUserPlans');
const updateAllUserPrays = require('./updateAllUserPrays');
const updatePersonalDetails = require('./updatePersonalDetails');
const updateUserPlans = require('./updateUserPlans');
const updateUserPrays = require('./updateUserPrays');
const contact = require('./contact');
const userData = require('./personalDetails');

module.exports = {
  auth,
  deleteUserPlan,
  deleteUserPray,
  listMyPlans,
  listMyPrays,
  updateAllUserPlans,
  updateAllUserPrays,
  updatePersonalDetails,
  updateUserPlans,
  updateUserPrays ,
  contact,
  userData
}