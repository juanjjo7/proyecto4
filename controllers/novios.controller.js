const Novio = require("../models/novios.model")
let response ={
    msg: "" ,
    exito:false
}

exports.create = function(req,res){
    let novio = new Novio({
        novio_id: req.body.novio_id,
        nombre: req.body.nombre,
        edad: req.body.edad,
        estatura: req.body.estatura,
        contextura: req.body.contextura,
        nacionalidad: req.body.nacionalidad,
        etnia: req.body.etnia


    })
    novio.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg ="error al guardar el novio"
            res.json(response)
            return;
        }

        response.exito = true ,
        response.msg = " el novio se guardo correctamente"
        res.json(response)
    })
}
    exports.find = function(req,res){
        Novio.find(function(err,novios){
            res.json(novios)
        })
    }
        exports.findOne = function(req,res){
            Novio.findOne({_id:req.params.id},function(err,novio){
                res.json(novio)
            })}

        exports.update = function(req,res){
            let novio = {
                novio_id: req.body. novio_id,
                nombre: req.body.nombre,
                edad: req.body.edad,
                estatura: req.body.estatura,
                contextura: req.body.contextura,
                nacionalidad: req.body.nacionalidad,
                etnia: req.body.etnia 
            }   
        Novio.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){

            if(err){
                console.error(err),
                response.exito = false,
                response.msg ="error al modificar el novio"
                res.json(response)
                return
            }
            response.exito = true,
            response.msg = "el novio quedo modificado "
            res.json(response)
        })}
    exports.remove = function (req, res) {
        Novio.findByIdAndRemove({_id:req.params.id},  function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg ="error al eliminar el novio"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "el novio quedo eliminado "
        res.json(response)

        
    
    })}

