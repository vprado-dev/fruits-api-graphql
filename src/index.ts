import dotenv from "dotenv-safe";

dotenv.config();

import { apollo } from "./apollo";

const PORT = process.env.PORT || 3000;

(async () => {
  apollo.listen(PORT, () =>
    console.info(
      `🟢 Listening at http://localhost:${PORT}${apollo.graphqlPath}`,
    ),
  );
})().catch((err) => {
  console.log(err);
  process.exit(1);
});
