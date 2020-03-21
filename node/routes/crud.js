var express = require('express');
var router = express.Router();
const service = require("../services/service");

router.get('/getdetails',async (req,res)=>{
    try{
        const result = await service.find();
        res.send(result);
        console.log("showing details");
    }catch(err){
        res.status(400).send(err);
    }
    });


router.get('/get/:id', async (req,res)=>{
    try{
        var id = req.params.id;
        const result = await service.findById(id);
        if(result){
            res.send(result);
            console.log("showing details of particular id ");
        }
        res.status(500).send(error);

    }catch(err){
        res.status(400).send(err);
    }

});
    
router.post('/insert', async (req,res)=>{
    const para=new service({
        "firstname":req.body.firstname,
        "lastname":req.body.lastname,
        "address":req.body.address,
        "city":req.body.city,
        "state":req.body.state,
    });
    try{
        const result = await para.save();
        res.send(result);
        console.log("inserted succesfuly");
    }catch(err){
    res.status(400).send(err);
    }

});

router.put('/update/:id',async(req,res)=>{
const id=req.params.id;
try{
    const update=await serv.findByIdAndUpdate({_id:id},req.body);
    res.send(update);
    console.log("details updated");
}catch(error){

    res.status(400).send(error);
}
});

router.delete('/delete/:id',async (req,res)=>{
const id=req.params.id;
try{
    const user=await serv.findByIdAndDelete(id);
    if(user){
        res.send(user);
        console.log("details deleted");
    }
}catch(error){
    res.status(400).send(error);
}
});






    module.exports = router;