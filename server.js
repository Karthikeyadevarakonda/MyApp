const dotEnv = require('dotenv')
dotEnv.config()

const express = require('express')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cors = require('cors');


const employeeRoutes = require('./routes/employeeRouters')

const app = express()

const PORT = process.env.PORT || 5000


app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send("🚀 Backend is Live on Render!");
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>{ 
    console.log("DB CONNECTED....!")
})
.catch((Error)=>{
    console.log("ERROR",Error)
})


app.use('/employees',employeeRoutes)


app.listen(PORT,()=>{
    console.log("SERVER CONNECTED.....!")
    console.log("MONGO_URI:", process.env.MONGO_URI ? "Available ✅" : "Undefined ❌");
})

