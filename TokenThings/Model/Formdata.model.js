const {Schema,model} = require('mongoose');

let formSchema=new Schema(
    {

        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        mobilenum:{
            type:Number,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }

    } 
,{timestamps:true})


//! doubt below 
module.exports=model('formdata',formSchema)