import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
import connectToDb from "./db";

// import new routes from routes
import { users } from "./routes";
export let server;
export async function startAPI() {
  const app = express()
    .use(cors())
    .use(express.json({ limit: "50mb", parameterLimit: 50000 }))
    .get("/", (reg, res) => res.sendStatus(200))
    .use("/users", users);
    // new routes should be imported and add like below
    // .use("/example", example);
  server = app.listen(3001, () =>
    console.log(`Listening on ${server.address().port}`)
  );
  await connectToDb();
  return app;
}
startAPI();
