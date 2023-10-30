import express from "express";
import dotenv from "dotenv";
import { sendMessage } from "./controller/MessageController.js";
import connectDB from "./config/db.js";
import cors from "cors"
const port = process.env.port || 5000;
dotenv.config();
connectDB();
const app = express();

app.use(cors())
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sendMessage", sendMessage);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
// import express from 'express'
// const app = express()
// app.get('/about',(req,res) => {
// res.send("what is happening over here")
// res.set({'Content-Type' : 'application/json'})
// console.log(res.header['Content-Type'])
// console.log(req.headers[)
// res.json(["warmonger"])
// res.render('about',{name : 'flavio'})
// })
// app.listen(5000,()=> {
//     console.log("server started on port 5000")
// })
