import app from "./app";
import { createRelationships, testConnection } from "./initDB";

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(Number(port), host, (): void => {
  console.log(`App listening at http://${host}:${port}`);
  // createRelationships();
  console.log(String(process.env.PGDATABASE),
    String(process.env.PGUSER),
    String(process.env.PGPASSWORD));
  testConnection();
});
