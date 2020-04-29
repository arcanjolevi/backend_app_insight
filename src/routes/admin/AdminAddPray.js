const prayDB = require('../../model/pray/prayDB');

module.exports = async(req, res) =>{  

    try{
        await prayDB.insertPray(req.body);
        const allPrays = await prayDB.listPray();
        return res.send({ status: 'Success', allPrays: allPrays });
    }catch(e){
        console.log("ERROR OCURRED: ", e);
        return res.status(400).send({ error: "Cant add pray", status: "failed" });
    }
    
};