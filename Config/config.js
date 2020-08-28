require("dotenv").config();



module.exports = {
    mongoURI:process.env.MONGO_URI,
    SECRET: process.env.SECRET,
    PORT: process.env.PORT,
}