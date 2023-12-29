import dotenv from 'dotenv';
dotenv.config(); //initialise dotenv
import connectToDatabase from './db.js'; //import function to connect to database
import express from 'express'; //creating express server
import cors from 'cors'; //allows browser to talk to different ports

//Routes
import productRoutes from './routes/productRoutes.js';
//call the function connectToDatabase
connectToDatabase();
//initialize express server
const app = express();
//format for the data we are sending
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);

//create a port
const port = 5000;
//get request
app.get('/', (req, res) => {
	res.send('Api is running...');
});
//listen to the port
app.listen(port, () => {
	console.log(`Server runs on port ${port}`);
});
