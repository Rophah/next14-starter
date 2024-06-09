const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
    try {
        if(connection.isConnected){
            console.log("Using existing connection");
            return;
        }

        const db = await mongoose.connect(process.env.MONGO);
        connected.isConnected = db.connections[0].readyState;
    } catch(error) {
        throw new Error(error);
    }
}