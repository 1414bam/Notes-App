const mongoose = require('mongoose');
const databaseName = 'NotesApp';
const connection = {};


async function dbConnect() {
    if (connection.isConnected) {
        return;

    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URL + databaseName, {
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        connection.isConnected = db.connections[0].readyState;
        console.log('mongoose is connection perfectly! (:', connection.isConnected);

    } catch (error) {
        console.log('mongoose unavaliable to connect now! something went wrong...')
    }
}


export default dbConnect;