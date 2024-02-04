import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    console.log('Tentative de connexion à la base de données');
    await client.connect();
    console.log('Connecté à la base de données');
  } catch (error) {
    console.error('Erreur de connexion à la base de données', error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
