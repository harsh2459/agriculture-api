var item=require('../model/item')

exports.add_item=async (req,res)=>{
    var data=await item.create(req.body)
    res.status(200).json({
        status: "success",
        data
    })
}

exports.show_item=async (req,res)=>{
    var data=await item.find().populate('cetegry')
    res.status(200).json({
        status: "success",
        data
    })
}

exports.update_item=async (req,res)=>{
    var id=req.params.id
    var data=await item.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: "success",
        
    })
}

exports.delete_item=async (req,res)=>{
    var id=req.params.id
    var data=await item.findByIdAndDelete(id)
    res.status(200).json({
        status: "success",
    })
}