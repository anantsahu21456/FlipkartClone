const mongoose = require('mongoose');

let connectToMongodb=(url)=>
{
    return mongoose.connect(url)
}

module.exports=connectToMongodb;