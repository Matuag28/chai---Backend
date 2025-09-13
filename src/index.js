import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`o Server is runnig at port ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
console.log("MONGO db connection is failed !!!",err);

})




































/*
(async ()=>{
    try{

        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    }
    catch(eror)
    {
        console.error("Error", error);
        throw err
        

    }
    

    
})()
    */