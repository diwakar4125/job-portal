import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () =>{
    try{
      const conn = await mongoose.connect(process.env.MONGO_LOCAL_URL)
      console.log(`connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`MongoDB Error ${error}`.bgRed.white);
    }
};


export default connectDB;

// import mongoose  from "mongoose";

// const mongoURI = "mongodb+srv://diwakarkumar4125:Diwakar123@cluster0.0zp7iuq.mongodb.net/";

// const connectToMongo = () => {
//   mongoose
//     .connect(mongoURI)
//     .then(() => {
//       console.log("Connected to MongoDB");
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB:", error);
//     });
// };

// export default connectToMongo;
