import mongoose from "mongoose";

const db = {
  host: `${process.env.DB_HOST}:${process.env.DB_PORT}`,
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
  name: process.env.DB_NAME,
};

const dbUri = `mongodb://${db.user}:${db.pass}@${db.host}`;
console.log(dbUri);
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: db.name,
};

export const connect = async () => {
  await mongoose
    .connect(dbUri, dbOptions)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Databased failed: ", error));
};
