const { MongoClient } = require("mongodb");

async function connectToLocalDatabase() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    console.log("Tentative de connexion à la base de données locale...");
    await client.connect();
    console.log("Connecté à la base de données locale.");
  } catch (error) {
    console.error("Erreur de connexion à la base de données locale", error);
  }finally {
    await client.close();
  }
}

connectToLocalDatabase();
