const mongoose =  require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    aadhaarnumber:{
        type:Number,
        required: true,
        unique: true
    },
    dob:{
        type: Date,
        required:true
    },
    phno:{
        type: Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
console.log("hello");
const buyersignup = new mongoose.model("buyer-Signup",UserSchema);
module.exports = buyersignup; 
