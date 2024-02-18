const express=require('express');

const {addFormdatas,getFormdatas,deleteUser,validateuser} = require('../Controller/formdata.controller');

let router=express.Router();


router.post('/addFormdatas',addFormdatas)
router.get('/getformdatas',getFormdatas)
router.delete('/deleteusers/:id',deleteUser)
router.get('/validateuser/',validateuser);



 

module.exports=router    