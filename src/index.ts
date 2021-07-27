import dotenv from "dotenv-safe";
import { apollo } from "./apollo";

dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 3000;

(async () => {
  await apollo.start();
  app.listen(PORT, () =>
    console.info(`🟢 Listening at http://localhost:${PORT}`),
  );
})().catch((err) => {
  console.log(err);
  process.exit(1);
});
