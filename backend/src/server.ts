import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.BACKEND_PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started successfully`);
});
