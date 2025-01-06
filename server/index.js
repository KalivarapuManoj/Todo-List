require("dotenv").config();
const express = require("express");
const { connectToMongodb } = require("./database");

const app = express();
app.use(express.json());

const router = require("./routes");

app.use("/api",router);

const port = process.env.PORT || 5000;

async function startServer(){
    await connectToMongodb();
    app.listen(port,() => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
};
startServer();
//testing github
