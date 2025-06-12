import express from "express";
import dotenv from "dotenv";
import connectDB from "./mongoDB/connect.js";

dotenv.config();  //import dotenv items here

const app = express();

app.get('/', async (req, res) => {
    app.send('Hello World!');
  });
  
  // Start the server
  const startServer = async () => {
    try {
      await connectDB(process.env.MONGODB_URL); // Don't forget the await
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();