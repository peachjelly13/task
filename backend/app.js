import express from "express"

const app = express();
import router from "./src/routes/userRouter.js";

app.use("/api/v1/users",router)

export{app}