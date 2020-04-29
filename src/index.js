require('dotenv').config();
const config = require('./config/config.json');

const express = require('express');

const port = process.env.PORT || 3000

/*
const bodyParser = require('body-parser');

const auth = require('./routes/user/auth');
const loginRoute = require('./routes/unsigned/login');        
const forgotPasswordRoute = require('./routes/unsigned/forgotPassword');
const updatePasswordRoute = require('./routes/unsigned/updateUserPassword');
const registerRoute = require('./routes/unsigned/register');
const listPlansRoute = require('./routes/everyone/listPlans');
const updateUserPlansRoute = require('./routes/user/updateUserPlans');
const listPraysRoute = require('./routes/everyone/listPrays');
const updateUserPraysRoute = require('./routes/user/updateUserPrays');
const listUserPlansRoute = require('./routes/user/listMyPlans');
const listUserPraysRoute = require('./routes/user/listMyPrays');
const deleteUserPlanRoute = require('./routes/user/deleteUserPlan');
const deleteUserPrayRoute = require('./routes/user/deleteUserPray');
const adminAddPlanRoute = require('./routes/admin/AdminAddPlan');
const adminAddPrayRoute = require('./routes/admin/AdminAddPray');
const adminAddTeamRoute = require('./routes/admin/AdminAddTeam');
const updatePersonalDetailsRoute = require('./routes/user/updatePersonalDetails');
*/
const app = express();
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/register', registerRoute);
app.post('/login', loginRoute);
app.post('/forgot/password', forgotPasswordRoute);
app.post('/update/password', updatePasswordRoute);

app.get('/list/all/plans', listPlansRoute);
app.get('/list/all/prays', listPraysRoute);
app.post('/update/user/plans', auth, updateUserPlansRoute);
app.post('/update/user/prays', auth, updateUserPraysRoute);
app.get('/user/plans', auth, listUserPlansRoute);
app.get('/user/prays', auth, listUserPraysRoute);
app.post('/delete/user/plans', auth, deleteUserPlanRoute);
app.post('/delete/user/prays', auth, deleteUserPrayRoute);
app.post('/update/personal/details', auth, updatePersonalDetailsRoute);

app.post('/admin/add/plan', adminAddPlanRoute);
app.post('/admin/add/pray', adminAddPrayRoute);
app.post('/admin/add/team', adminAddTeamRoute);

*/


app.get('/', (req, res) => {
    return res.send('Oie Levi');
});
app.listen(port, () => {
    console.log(`...\n...\n\t${config.COMPANY} Server running at port ${port}\n...\n...`);
});
