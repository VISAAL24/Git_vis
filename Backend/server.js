import express from 'express'
import {connectDB} from './config/db.js'
import mongoose from 'mongoose'
import User from './model/user.js'
const app=express()

connectDB()

app.get('/get',async(req,res)=>{
    const user= await User.find()
    res.json(user)
})

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})

app.post('/post',(req,res)=>{
    res.send('from post')
})

app.put('/put',(req,res)=>{
    res.send('from put')
})

app.patch('/patch',(req,res)=>{
    res.send('from patch')
})

app.delete('/delete',(req,res)=>{
    res.send('from delete')
})