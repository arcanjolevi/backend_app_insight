const userDB = require('../../model/user/usersDB');




module.exports = async (req, res) => {

    const obj = {};

    if(req.body.name){
        obj.name = req.body.name;
    }

    if(req.body.bornDate){
        obj.bornDate = req.body.bornDate;
    }

    if(req.body.whatsapp){
        obj.whatsapp = req.body.whatsapp;
    }

    if(req.body.institution){
        obj.institution = req.body.institution;
    }

    if(req.body.course){
        obj.course = req.body.course
    }
    try{
        await userDB.updateUser({ _id: req.userId }, obj);
    }catch(e){
        console.log(e);
        return res.status(400).send({ status:'failed' });
    }

    return res.send({ status: 'success', mensage: 'User updated' })
}