const express = require("express");
const cors = require("cors");
const db = require("./db/database");
const { readdirSync } = require("fs");
const app = express();

require("dotenv").config();

// middlewares
app.use(express.json());
app.use(cors());

///routes
readdirSync('./routes').map((route) => {
app.use('/api/v1',
require('./routes/' + route))
});

// server Listening
const PORT = process.env.PORT;
const start = async () => {
  try {
    db.database()
    app.listen(
      PORT,
      console.log(`Server is Listen on port http://localhost:${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
