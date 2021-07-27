declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "test" | "production" | "staging";
    PORT: string;
    API_NAME: string;
    API_TOKEN: string;
    DB_HOST: string;
    DB_PORT: string;
    MONGO_INITDB_ROOT_USERNAME: string;
    MONGO_INITDB_ROOT_PASSWORD: string;
    DB_NAME: string;
  }
}
