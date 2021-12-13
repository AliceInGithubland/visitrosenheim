import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import { connectDatabase, getCafeLocationCollection } from "./database";

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URL dotenv variable");
}

// setze den port auf process.env.PORT oder 3001
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

// API routes
app.get("/api/test", (_request, response) => {
  response.json({ message: "Test from server" });
});

// serve production bundle of app and storybook
app.use(express.static("dist"));

app.get("/api/cafeLocations", async (_request, response) => {
  const cafeLocation = getCafeLocationCollection();
  const locations = cafeLocation.find();
  const allLocations = await locations.toArray();
  response.send(allLocations);
});

app.post("/api/cafeLocations", async (request, response) => {
  const cafeLocation = getCafeLocationCollection();
  const newLocation = request.body;
  await cafeLocation.insertOne(newLocation);
  response.send(newLocation);
});

// send all other requests to the app
app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "../dist/index.html"));
});

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);

// Handle client routing, return all requests to the app
app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "../dist/index.html"));
});

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
