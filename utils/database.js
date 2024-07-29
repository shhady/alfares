import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            dbName: 'alfares',
        });
        isConnected = true;
        console.log('MongoDB connection established');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};

