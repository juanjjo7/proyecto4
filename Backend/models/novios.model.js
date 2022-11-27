const mongoose =require ("mongoose");
const Schema  = mongoose.Schema;

const NoviosSchema = new Schema({
    novio_id:{type:String, required:true, max:60},
    nombre:{type:String, required:true, max:60},
    edad:{type:Number, required:true, max:45},
    estatura:{type:Number, required:true, max:250},
    contextura:{type:String, required:true, max:60},
    nacionlidad:{type:String, required:false, max:70},
    etnia:{type:String, required:false, max:150}
    
});

module.exports =mongoose.model("novios", NoviosSchema);
