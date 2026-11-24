require("dotenv").config();
const express = require("express");
const connectDatabase = require("./config/db");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "API perpustakaan berjalan.",
    endpoints: {
      komik: "/api/komik",
      register: "/api/register",
      login: "/api/login",
    },
  });
});

app.use("/api", require("./routes/api"));

async function startServer() {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
startServer();