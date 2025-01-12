require("dotenv").config();

const {MongoClient , ServerApiVersion} = require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";

const options = {
    serverApi : {
        version : ServerApiVersion.v1,
        strict : true,
        deprecationErrors : true,
    }
};

let client;
const connectToMongodb = async () => {
    if(!client){
        try {
            client = await MongoClient.connect(uri,options);
            console.log("Connected to Mongodb");
            
        } catch (error) {
            console.log(error);
        }
    }
    return client;
};

const getConnectedClient = () => {
    return client;
};

module.exports = {connectToMongodb,getConnectedClient};

