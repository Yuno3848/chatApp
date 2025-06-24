import express from "express";
import dotenv from "dotenv";

import app from "./app.js";
import { db } from "./db/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to database...", error);
    process.exit(1);
  });
