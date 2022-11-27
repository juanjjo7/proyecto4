const Usuario = require("../models/usuarios.models");
const crypto = require('crypto');
const jwt = require("jsonwebtoken")

exports.login = function(req,res,next){
console.log("llego12345")
    let hashedpass = crypto.createHash('sha512','prueba').update(req.body.pass).digest('hex');
    console.log("llegow")
    Usuario.findOne({usuario: req.body.usuario,pass: hashedpass}, function(err, usuario){
    let response ={
        token:null

    }
    if(usuario !== null){
        response.token = jwt.sign({
            id: usuario._id,
            usuario: usuario.usuario
        },"__recret__",
        
        {expiresIn:"12h"}
        )
    }
    res.json(response);

    })}
