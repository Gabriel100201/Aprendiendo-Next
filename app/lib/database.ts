import postgres from "postgres";

declare global {
  var sql: ReturnType<typeof postgres> | undefined;
}

const sql = global.sql || postgres(process.env.POSTGRES_URL!, { ssl: false });

if (process.env.NODE_ENV !== "production") global.sql = sql;

export default sql;
