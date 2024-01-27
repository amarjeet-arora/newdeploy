const mongoose = require('mongoose');
const cors= require('cors')
var express= require('express')
var bp=require('body-parser')
 const empcrud =require('./model')
var app= express()
app.use(bp.json())
app.use(cors())
app.post('/adduser',(req,res)=>{
const users = new empcrud(
    { ...req.body
     });
     users.save().then(() => res.send('user added'));
     
})
app.get('/loadusers',async(req,res)=>{
  
    const users= await empcrud.find()
    return res.status(200).json(users)
   
})


app.get('/loadusers/:id',async(req,res)=>{
    const uid= req.params.id
    const user= await empcrud.findById(uid)
    return res.status(200).json(user)
   
})


app.put('/updateusers/:id',async(req,res)=>{
    const uid= req.params.id
    await  empcrud.updateOne({uid},req.body)
    const updateuser= await empcrud.findById(uid)
    return res.status(200).json(updateuser)
   
})


const startServer=async() =>{
    await mongoose.connect(`mongodb+srv://upgrad:upgrad123@cluster0.rle5i.mongodb.net/mernndb?retryWrites=true&w=majority`);
    app.listen(4000,()=>{
        console.log('server is ready');

})

}
startServer()

    
