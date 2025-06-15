import express from "express";
import dotenv from "dotenv";
import connectDB from "./mongoDB/connect.js";

dotenv.config();  //import dotenv items here

const app = express();

// 1. Body parser middleware (important!)
app.use(express.json());

app.get('/', async (req, res) => {
    app.render('Hello World!');
  });

  // 3. Route middleware
// app.use('/api/auth', authRoutes); // Your auth routes will be like /api/auth/register or /api/auth/login
// app.use('/api/products', productRoutes); // Use when you create product routes

  
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