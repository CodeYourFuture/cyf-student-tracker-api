import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
// import new routes from routes
import { users, students, auth} from "./routes";
export let server;
export async function startAPI() {
  const app = express()
    .use(cors())
    .use(express.json({ limit: "50mb", parameterLimit: 50000 }))
    // localhost:3001
    .get("/", (reg, res) => res.sendStatus(200))
    .use("/users", users)
    .use("/students", students)
    .use("/auth", auth);
  
    
    // new routes should be imported and add like below
    // .use("/example", example);
  server = app.listen(3001, () =>
    console.log(`Listening on ${server.address().port}`)
  );
  return app;
}
startAPI();
