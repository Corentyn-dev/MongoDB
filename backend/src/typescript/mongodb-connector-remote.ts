const { ServerApiVersion } = require("mongodb");
import { MongoClient } from "./constants.mts";

async function connectToRemoteDatabase() {
  const uri =
    "mongodb+srv://userAdmin1:admin1password@marketplace.ned68jm.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    console.log("Connexion à la base de données distante...");
    await client.connect();
    console.log(
      "Liaison établie. La base de données est prête à être utilisée."
    );
  } catch (error) {
    console.error("Erreur de connexion à la base de données", error);
  }
}

module.exports = connectToRemoteDatabase;
