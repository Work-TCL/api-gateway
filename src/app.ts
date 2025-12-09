import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

// Auto-load all route files inside "routes" directory
const routesPath = path.join(__dirname, "routes");

if (fs.existsSync(routesPath)) {
  fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith(".routes.ts") || file.endsWith(".routes.js")) {
      const route = require(path.join(routesPath, file)).default;
      app.use(`/api/${file.replace(".routes.ts", "").replace(".routes.js", "")}`, route);
    }
  });
} else {
  console.error("Routes directory not found:", routesPath);
}
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

export default app;
