const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./utils/db");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, "/client/build")));
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/users", require("./routes/users"));
  app.use("/api/admin", require("./routes/admin"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname + "/client", "build", "index.html"))
  );

} else {
  const __dirname = path.resolve();
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/admin", require("./routes/admin"));

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
