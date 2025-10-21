import app from "./app.js";

const PORT = process.env.BACKEND_PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started successfully`);
});
