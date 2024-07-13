import mongoose from 'mongoose'

const mongoDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log(`\n MongoDb connected !! DB HOST:  ${connectionInstance.connection.host}\n`);
    } catch (error) {
        console.log(`Error while connecting to MongoDB \n`, error);
        process.exit(1)
    }    
}


export default mongoDB