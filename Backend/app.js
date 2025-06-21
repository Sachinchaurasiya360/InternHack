const express=require('express');
const app=express();
const routes=require("./Routes/MainRoutes")
const Port=3000


app.use("api/v1",routes)

app.listen((Port)=>{
    console.log(`Server is running on ${Port}`)
})