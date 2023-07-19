const express = require("express");
const router = express.Router();
const Activity = require("../models/activityModel")

router.post('/activity', (req, res) => {
    const data = req.body;
    const newUser = new Activity(data);
    res.status(200).send(newUser);
})

router.get('/activitydetail', async(req, res) => {
    try {
        const posts = await Activity.find({status: 'verified'});
        res.status(200).json({activity : posts});
    }
    catch (err) {
        res.status(500).json({message: "internal server error"});
    }
})


module.exports = router