
let jwt = require('jsonwebtoken')
let FormdataCollection = require('../Model/Formdata.model');


// ? Adding unique user whose email and mobile numberis not present in the database(collection)
let addFormdatas = async (req, res) => {
    try {
        // console.log(res,req)
        // console.log("serrver is hitting");
        console.log("body",req.body)
        let { username, mobilenum, email, password } = req.body

        let isEmailAvailable = await FormdataCollection.findOne({ email })
        console.log("email",isEmailAvailable)

        if (!isEmailAvailable) { 
            
            let IsMobileAvailable = await FormdataCollection.findOne({ mobilenum })
         console.log("mobile",IsMobileAvailable)

            if (!IsMobileAvailable) {
                console.log("hello")
                let user = await FormdataCollection.create({ username, email, mobilenum, password})
               

                res.json({ error: false, message: "userdata added succesfully" })
            }
            else {
                res.json({ error: true, message: "this mobile number already exists" })

            }

        }
        else {
            res.json({ error: true, message: "this email already exists" })
        }


    }

    catch (error) {
       
        res.json({ error: true, message: error.message })
    }
}

// ! getting  the all user's information from the database
let getFormdatas = async (req, res) => {
    try {
        // console.log("Getformdata is executed");

        let authToken=req.headers.authorization;

        if(!authToken || !authToken.startsWith('Bearer'))
        {
            return res.send('Token Required')
        }
        else
        {
            let token=authToken.split(" ")[1];
            let decodeData = await FormdataCollection.find({})
            console.log(decodeData);

            return res.json({ error: false, message: 'data got succesfully', decodeData })
    
        }


    }
    catch (err) {
        res.json({ error: true, message: err.message })
    }


}
// ! deleting the user's information from the database
let deleteUser = async (req, res) => {

    try {
        console.log("DEleting malware funtion");
        let { id } = req.params;
        console.log(id);
        let deletedUser = await FormdataCollection.findByIdAndDelete({ _id: id })

        res.json({ error: false, message: "user's data deleted succesfully", data: deleteUser })
    }

    catch (err) {
        res.json({ error: true, message: "didn't find the data which u want to delete " })
    }

}

// ! validating the user's information from the database
// ! that if it matches user should get the access 

let validateuser = async (req, res) => {
    let { Email, Pass } = req.body

    console.log(Email, Pass);
    let isUserAvailable = await FormdataCollection.findOne({ Email })


    if (isUserAvailable)
     {
        if (isUserAvailable.Pass === Pass) {

            let token=jwt.sign({...isUserAvailable},"syed123",{expiresIn:"1m"})
            res.json({ error: false, message: 'Login succesfull',token })

        }
        else {
            res.json({ error: true, message: "invalid password " })
        }

    }
    else
     {
        res.json({ error: true, message: "invalid user(user does not exist" })
    }

}


module.exports = { addFormdatas, getFormdatas, deleteUser, validateuser };