import app from "./app.js";

const port: number = 5000;

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
