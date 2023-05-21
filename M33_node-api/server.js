import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
