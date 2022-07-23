const express = require('express')

const router = express.Router()

//get all workout
router.get('/',(req,res) => {
    res.json({mssg: 'Get All Workout'})
})

//get single workout
router.get('/:id',(req,res)=>{
    res.json({mssg: 'Get a Single Workout'})
})

//Post a new workout
router.post('/',(req,res)=>{
    res.json({mssg: 'POST a new Workout'})
})

//Delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'Delete a workout'})
})

//Update a workout 
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'Update a workout'})
})

module.exports = router