import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDatabase } from "./database";

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URL dotenv variable");
}

// setze den port auf process.env.PORT oder 3001
const app = express();
const port = process.env.PORT || 3003;
app.use(express.json());

// API routes
app.get("/api/test", (_request, response) => {
  response.json({ message: "Test from server" });
});

// serve production bundle of app and storybook
app.use(express.static("dist"));

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
