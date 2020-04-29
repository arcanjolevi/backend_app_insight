const prayDB = require('../../model/pray/prayDB');

module.exports = async (req, res) => {
    
    const prays = await prayDB.listPray();
    return res.send( prays );
};