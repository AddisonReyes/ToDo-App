import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

app.use(express.static(path.join(process.cwd())));

app.get("/config.js", (req, res) => {
  const configContent = `window.API_BASE_URL = '${BACKEND_URL}';`;
  res.type("application/javascript");
  res.send(configContent);
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
