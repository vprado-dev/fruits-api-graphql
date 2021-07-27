import dotenv from "dotenv-safe";

dotenv.config();

import { apollo } from "./apollo";
import { connect } from "./database/database";

const PORT = process.env.PORT || 3000;

(async () => {
  await connect();
  apollo.listen(PORT, () =>
    console.info(
      `🟢 Listening at http://localhost:${PORT}${apollo.graphqlPath}`,
    ),
  );
})().catch((err) => {
  console.log(err);
  process.exit(1);
});
