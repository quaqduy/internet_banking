const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const accountModel = require('../../models/account');
const idCard = require('../../models/idCard');

router.post('/API',(req,res)=>{

    const fullname = req.body.fullname;

    accountModel.find({fullname})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{res.json(error)})
});

router.post('/API/getUser',(req,res)=>{

    const username = req.body.username;

    accountModel.find({username})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{res.json(error)})
});

router.post('/API/getUserIDCard',(req,res)=>{

    const email = req.body.email;

    idCard.find({email})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{res.json(error)})
});


router.post('/API/updateIDCard',(req,res)=>{
    const email = req.body.email;
    const frontIdCard = req.body.frontIdCard;
    const backIdCard = req.body.backIdCard;
    idCard.findOneAndUpdate({email}, 
        {$set: {frontIdCard,backIdCard}})
        .then(()=>{
            accountModel.findOneAndUpdate({email},{$set: {status: "Waiting for verification"}})
            .then(()=>{
                res.json("Update successs!!");
            })
        })
        .catch((error)=>{res.json(error)})
});

module.exports = router;