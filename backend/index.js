import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import compression from "compression";

dotenv.config();
// connectDataBase();
const app = express();

app.use(cors());
app.use(compression());
app.use(express.json({ limit: "1500kb" }));

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

app.use("/uploads", express.static(path.join(__dirname, "/uploads/")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(path.resolve(), "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running!");
  });
}

app.use(notFound);
app.use(errorHandler);

const Port = process.env.PORT || 5000;

app.listen(
  Port,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${Port}`)
);
