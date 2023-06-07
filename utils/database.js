import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("MongoDB is connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            maxPoolSize:50,
            wtimeoutMS:2500,
            useNewUrlParser:true
            });
        isConnected = true;
    }catch(error){
        console.log(error);
<<<<<<< HEAD
        throw error;
=======
>>>>>>> f33378a815298b86ddeb1b1c271d879ca8a70201

    }
}