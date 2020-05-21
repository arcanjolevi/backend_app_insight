require('dotenv').config();
const jwt = require('jsonwebtoken');
const userDB = require('../../model/user/usersDB');


module.exports = (req, res, next) => {
    console.log('Autenticando admin...');
    const { token } = req.params;
    
    
    if (!token) 
        return res.status(400).send({ auth: false, error: 'No token provided.' });
  
    jwt.verify(token, process.env.SECRET, async  function(err, decoded) {
        if (err) 
            return res.status(401).send({ auth: false, error: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    const userData = await userDB.findUser({ _id: decoded.id });
    if(!userData.admin)
      return res.status(401).send({ auth: false, error: 'Failed to authenticate token.' });
    console.log(`Admin ${userData.name} autenticado`);
    next();
  });
};