import mongoose from "mongoose";


const MONGODB_URI = "mongodb+srv://gauravtripathii7979:gauravtripathii7979@cluster0.gjaxmsa.mongodb.net/?retryWrites=true&w=majority"


const DBConnection = async () => {
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log("Database successfully connected!");
    } catch (error) {
        console.log("Error while connecting to the database : ", error.message);
    }
}

export default DBConnection;