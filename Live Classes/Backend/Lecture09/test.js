import dns from "node:dns";
import { MongoClient } from "mongodb";

dns.setServers(["8.8.8.8"]);

console.log("DNS Servers:", dns.getServers());

const uri = "mongodb+srv://ketanshetgedev:ketan210467@cluster0.85arw9c.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("✅ CONNECTED");
} catch (err) {
  console.error(err);
} finally {
  await client.close();
}