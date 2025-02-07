import express from "express";
import path from "path";
import admin_router from "./routes/admin";
import portfolio_router from "./routes/portfolio";
import prophecy_router from "./routes/prophecy";
import public_router from "./routes/public";

const HTTP_PORT: number = 8181;
const app: express.Express = express();

// Add this line to parse JSON bodies
app.use(express.json());
// Add this line to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set up pug as view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));

app.use("/admin", admin_router);
app.use("/public", public_router);
app.use("/prophecy", prophecy_router);
app.use("/", portfolio_router);

app.listen(HTTP_PORT, () => {
  console.log(`server listening on ${HTTP_PORT}`);
});
