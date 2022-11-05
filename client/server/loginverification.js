const mongoose=require('mongoose');

const URI='mongodb+srv://splitwise:splitwise@cluster0.mcuaqza.mongodb.net/?retryWrites=true&w=majority';

const connectDB=async()=> {
    
    await mongoose.connect(URI,{useUnifiedTopology:true, useNewUrlParser:true});

    console.log("connected")
}
module.exports=connectDB;