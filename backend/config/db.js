// import mongoose from 'mongoose';

// const connectDB =  () => { 
//   mongoose.set("strictQuery", false);
//   mongoose.connect(process.env.MongoDB_URL)
//   .then(() =>{
//       console.log("MongoDB connecté avec success")
//    } ).catch( (err) =>{
//     console.log(err);
//   })
// };

// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => { 
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MongoDB_URL);
    console.log("MongoDB connecté avec succès");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
  }
};

export default connectDB;
