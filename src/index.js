require('dotenv').config();
const config = require('./config/config.json');

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const userRoutes = require('./routes/user/userRoutes');
const unsignedRoutes = require('./routes/unsigned/unsignedRoutes');
const everyoneRoutes = require('./routes/everyone/everyoneRoutes');
const adminRoutes = require('./routes/admin/adminRoutes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//unsignedRoutes
app.post('/register', unsignedRoutes.register);
app.post('/login', unsignedRoutes.login);
app.post('/forgot/password', unsignedRoutes.forgotPassword);
app.post('/update/password', unsignedRoutes.updateUserPassword);

//everyoneRoutes
app.get('/list/all/plans', everyoneRoutes.listPlans);
app.get('/list/all/prays', everyoneRoutes.listPrays);
app.get('/list/all/teams', everyoneRoutes.listTeams);
app.get('/list/all/users', everyoneRoutes.listAllUsers);
app.get('/list/all/news', everyoneRoutes.listNews);
app.get('/list/all/teams/data', everyoneRoutes.allTeamsData);


//adminRoutes
app.post('/admin/:token/add/plan', adminRoutes.auth, adminRoutes.addNewPlan);
app.post('/admin/:token/add/pray', adminRoutes.auth, adminRoutes.addNewPray);
app.post('/admin/:token/add/team', adminRoutes.auth, adminRoutes.addNewTeam);
app.post('/admin/:token/update/team', adminRoutes.auth, adminRoutes.modifyTeam);
app.post('/admin/:token/update/team/members', adminRoutes.auth, adminRoutes.updateTeamMembers);
app.delete('/admin/:token/delete/team/:teamID', adminRoutes.auth, adminRoutes.deleteTeam);
app.post('/admin/:token/update/member/team', adminRoutes.auth, adminRoutes.updateMemberTeam);
app.get('/admin/:token/list/members/without/team', adminRoutes.auth, adminRoutes.listMembersWithoutTeam);
app.get('/admin/:token/list/all/users', adminRoutes.auth, adminRoutes.listAllUserWithData);
app.post('/new/admin/:token/:userID', adminRoutes.auth, adminRoutes.newAdmin);
app.post('/admin/:token/create/news', adminRoutes.auth, adminRoutes.createNews);
app.delete('/admin/:token/delete/news/:newsID', adminRoutes.auth, adminRoutes.deleteNews);
app.post('/admin/:token/modify/news', adminRoutes.auth, adminRoutes.modifyNews);
app.delete('/admin/:token/delete/pray/:prayID', adminRoutes.auth, adminRoutes.deletePray);

//userRoutes
app.post('/update/all/user/plans', userRoutes.auth, userRoutes.updateAllUserPlans);
app.post('/update/all/user/prays', userRoutes.auth, userRoutes.updateAllUserPrays);
app.post('/update/user/plans', userRoutes.auth, userRoutes.updateUserPlans);
app.post('/update/user/prays', userRoutes.auth, userRoutes.updateUserPrays);
app.post('/delete/user/plans', userRoutes.auth, userRoutes.deleteUserPlan);
app.post('/delete/user/prays', userRoutes.auth, userRoutes.deleteUserPray);
app.post('/update/personal/details', userRoutes.auth, userRoutes.updatePersonalDetails);
app.get('/user/plans', userRoutes.auth, userRoutes.listMyPlans);
app.get('/user/prays', userRoutes.auth, userRoutes.listMyPrays);
app.post('/contact', userRoutes.auth, userRoutes.contact);
app.get('/user/data/:userID', userRoutes.userData);


//HomePage
app.get('/', (req, res) => {
  return res.send('Hello!! Bem vindo ao servidor do app Insight');
});

app.listen(port,() => {
  console.log(`...\n...\n\t${config.COMPANY} Server running at port ${port}\n...\n...`);
});
