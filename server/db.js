import mongoose from 'mongoose';

const connectToDatabase = async () => {
	/*if (typeof process.env.MONGO_URI === 'string') {
		console.log('string');
	} else console.log('not a string');
}; */
	try {
		mongoose.set('strictQuery', false);
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`MongoDb Connected: ${connect.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

export default connectToDatabase;
