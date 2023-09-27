const TOKEN_SECRET = require('../config')
const jwt = require("jsonwebtoken") 

	//funcipn creadora de tokens
	//El payload es el id de un usuario medianto ello creara el token de acceso
  const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { 
			//colocamos que expira en 1 dia
      expiresIn: "1d" 
  }, 
    (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}

module.exports = createAccessToken