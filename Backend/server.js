import express from 'express'
import {connectDB} from './config/db.js'
import mongoose from 'mongoose'
import User from './model/user.js'

const app=express()

connectDB()
app.use(express.json())
app.use(express.urlencoded())

const methodFind=(req,res,next)=>{
    console.log(`${req.method}`);
    next()
}
app.use(methodFind)
app.get('/get/:id',async(req,res)=>{
    const 
})
app.get('/get',async(req,res)=>{
    const user= await User.find()
    res.json(user)  

})

app.post('/post',async(req,res)=>{
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.json(newUser)
    }catch(error){
        res.status(401).json(error)
    }
})

app.put('/put/:id',async(req,res)=>{
    try{
    const update=await User.findByIdAndUpdate(req.params.id,req.body)
        res.json(update)
    }catch(error)
    {
        res.json(error)
    }
})

app.patch('/patch',(req,res)=>{
    res.send('from patch')  
})

app.delete('/delete/:id',async(req,res)=>{
    try{
    const del=await User.findByIdAndDelete(req.params.id,req.body)
        res.json(del)
    }catch(error)
    {
        res.json(error)
    }
})

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})