const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is running");
});

 
app.get("/api/message",(req, res) => {
    res.json({
        message:"Hello from my Node.js API"

    });
});

app.post("/api/users", (req,res) => {

    const user = req.body;

    console.log(user);

    res.json({
        message: "User received successfully",
        user: user
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

