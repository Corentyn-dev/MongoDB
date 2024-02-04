const { MongoClient, ServerApiVersion } = require("mongodb");

async function connectToDatabase() {
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (error) {
    console.error("Erreur de connexion à la base de données", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
