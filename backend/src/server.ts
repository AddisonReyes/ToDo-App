import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const port = process.env.BACKEND_PORT || 5000;

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
