// // server.js
// import express from "express";

// const app = express();

// // middleware
// app.use(express.json());

// // routes
// app.get("/", (req, res) => {
//   res.send("Server is running 🚀");
// });

// app.get("/api/test", (req, res) => {
//   res.json({ message: "API working" });
// });

// // server start
// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 👉 routes import
import contactRoutes from "./routes/contact.routes.js";

// 👉 env config
dotenv.config();

const app = express();

// 👉 middlewares
app.use(cors());
app.use(express.json());

// 👉 test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 👉 main routes
app.use("/api/contacts", contactRoutes);

// 👉 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// 👉 global error handler (optional but pro)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong",
    error: err.message,
  });
});

// 👉 port
const PORT = process.env.PORT || 5000;

// 👉 start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});