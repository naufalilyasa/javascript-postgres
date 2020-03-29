const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "12345678",
  host: "172.17.0.1", //172.17.0.1
  port: 5432,
  database: "naufaldb"
});

client
  .connect()
  .then(() => console.log("Connected successfully."))
  .catch(e => console.log(e))
  .finally(() => client.end());
