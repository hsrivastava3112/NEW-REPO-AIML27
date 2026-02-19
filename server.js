const express=require('express')
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('This is my first sever');
})

app.get('/about',(req,res)=>{
    const student=[
        {
            id:1,
            name:"Himanshu",
            class:"Btech 3 year"
        },
        {
            
            id:2,
            name:"Aditya",
            class:"Btech 3 year"
        },
        {
            
            id:3,
            name:"Utkarsh",
            class:"Btech 3 year"
        },
        {
            
            id:4,
            name:"abhishek",
            class:"Btech 3 year"
        },
        {
           
            id:5,
            name:"Saurabh",
            class:"Btech 3 year" 
        }
    ]
    res.send(student)
})
app.get('/contact',(req,res)=>{
    res.send('<h1> 8130738751');
})
app.listen(port,()=>{
    console.log(`server run at:http://localhost:${port}`)
})