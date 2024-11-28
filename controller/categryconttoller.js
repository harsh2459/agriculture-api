var categary=require('../model/categry');


exports.add_categary=async (req,res)=>{
    var data=await categary.create(req.body)
    res.status(200).json({
        status: "success",
        data
    })
}

exports.show_categary=async (req,res)=>{
    var data=await categary.find()
    res.status(200).json({
        status: "success",
        data
    })
}

exports.update_categary=async (req,res)=>{
    var id=req.params.id
    var data=await categary.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: "success",
        
    })
}

exports.delete_categary=async (req,res)=>{
    var id=req.params.id
    var data=await categary.findByIdAndDelete(id)
    res.status(200).json({
        status: "success",

    })
}