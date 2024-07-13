import { app } from "./apps.js";
import mongoDB from "./src/DB/database.js";

mongoDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`running on port ${process.env.PORT}`);
    })
})
.catch(err=>{console.log(`connection failed.....`);})