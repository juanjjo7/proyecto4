const jwt = require("jsonwebtoken")

const auth =(req, res, next) => {
    try{
    console.log('entro a validar token')
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token,"__recret__");  
    req.usuario = decoded;
    console.log('paso por aqui')
    console.log(token)
    console.log(decoded)
    next();  
    }catch (error){
        res.status(401);
        res.json({code:4,msg:"no tiene autorization para ver el contenido"});

    }
}
module.exports = auth;