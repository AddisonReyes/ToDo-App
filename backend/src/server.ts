import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
