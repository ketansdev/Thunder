import "./dnsFix.js";
import { MongoClient } from "mongodb";

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri =
    "mongodb+srv://ketanshetgedev:ketan210467@cluster0.85arw9c.mongodb.net/?appName=Cluster0";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const database = client.db("panvel");
    const friends = database.collection("friends");

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: "Back to the Future" };
    const friend = await friends.insertMany([
      {
        item: "journal",
        qty: 25,
        tags: ["blank", "red"],
        size: { h: 14, w: 21, uom: "cm" },
      },
      {
        item: "mat",
        qty: 85,
        tags: ["gray"],
        size: { h: 27.9, w: 35.5, uom: "cm" },
      },
      {
        item: "mousepad",
        qty: 25,
        tags: ["gel", "blue"],
        size: { h: 19, w: 22.85, uom: "cm" },
      },
    ]);
    console.log(friend);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
