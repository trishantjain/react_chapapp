const moongose = require("mongoose")

const connectDB = () => {
     try {
        const connect = moongose.connect(process.env.MONGO_URI, 
            {useNewUrlParser: true,
            useUnifiedTopology :true});
            console.log("Connected...")
     } catch (error) {
        console.log("error")
     }
}

module.exports = connectDB;