var admin = require('../model/admin')
const bcrypt = require('bcrypt');
const storage = require('node-persist');
storage.init();

var chech_login = 0;


exports.add_admin = async (req, res) => {
    var check_email = await admin.find({ email: req.body.email })
    var b_pass = await bcrypt.hash(req.body.password, 10)
    req.body.password = b_pass
    if (check_email == 0) {
        var data = await admin.create(req.body)
        res.status(200).json({
            status: "success",
            data
        })
    }
    else {
        res.status(200).json({
            status: "email is already exits",

        })
    }
}


exports.show_admin = async (req, res) => {
    var data = await admin.find()

    res.status(200).json({
        status: " success",
        data
    })
}


exports.update_admin=async (req,res)=>{
    var id=req.params.id
    var data=await admin.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: "success",
        
    })
}

exports.delete_admin=async (req,res)=>{
    var id=req.params.id
    var data=await admin.findByIdAndDelete(id)
    res.status(200).json({
        status: "success",

    })
}


exports.admin_login = async (req, res) => {
    var data = await admin.find({ email: req.body.email })
    var chech_pass = await bcrypt.compare(req.body.password, data[0].password)
    var id = await storage.getItem('id')
    if (id == undefined) {
        if (chech_login == 0) {
            if (data.length == 1) {
                if (chech_pass) {
                    chech_login = 1;
                    await storage.setItem('id', data[0].id)
                    res.status(200).json({
                        status: "Login success",
                        tokan
                    })
                }
                else {
                    res.status(200).json({
                        status: "check email or password",

                    })
                }
            }
            else {
                res.status(200).json({
                    status: "check email or password",

                })
            }
        }
        else {
            res.status(200).json({
                status: "admin already login",

            })
        }

    }
    else {
        res.status(200).json({
            status: "admin already login",

        })
    }
}





exports.admin_logout = async (req, res) => {
    chech_login = 0
    storage.clear();
    res.status(200).json({
        status: "Logout success",
    })
}