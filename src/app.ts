import express from "express";
import { readdirSync } from "fs";
import { join } from "path";
import { notFound } from "./middlewares/notFound";
import { exception } from "./middlewares/exception";

const app = express();

const routes = readdirSync(join(__dirname, "routes"));
for (const route of routes) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app.use(require(join(__dirname, "routes", route)).default);
}

app.use(exception);

app.use(notFound);

export default app;
