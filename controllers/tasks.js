const Task = require("../models/tasks.js")

const asyncWrapper = require("../middleware/async.js")

const {createCustomError,CustomAPIError} = require("../errors/custom-error.js")

const getAllTasks = asyncWrapper(async (req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json({success:true,amount:tasks.length,tasks})
}) 

const createTask = asyncWrapper(async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({success:true,task})
})

const getTask = asyncWrapper(async (req,res,next)=>{
    const task = await Task.findOne({_id:req.params.id})
    if(!task){
        return next(createCustomError(`No task with id: ${req.params.id}`,404))
    }
    res.status(200).json({success:true,task})
})

const updateTask = asyncWrapper(async (req,res)=>{
    const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    if(!task){
        return next(createCustomError(`No task with id: ${req.params.id}`,404))
    }
    res.status(200).json({success:true,task})
})

const deleteTask = asyncWrapper(async (req,res)=>{
    const task = await Task.findOneAndDelete({_id:req.params.id})
    if(!task){
        return next(createCustomError(`No task with id: ${req.params.id}`,404))
    }
    res.status(200).json({success:true,removedTask:task})
    //res.status(200).json({task:null, success:true})
})

module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}