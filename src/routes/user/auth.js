require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log('Autenticando...');
    console.log(req);
    var token = req.headers.token;
    
    if (!token) 
        return res.status(400).send({ auth: false, error: 'No token provided.' });
  
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) 
            return res.status(401).send({ auth: false, error: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    console.log(`Usuário ${req.userId} autenticado`);
    next();
  });
};