// Importer l'assertion pour les tests
import assert from 'assert';

// Importer la fonction à tester
import { connectToLocalDatabase } from '../mongodb-connector-local.mjs';
import { connectToRemoteDatabase } from '../mongodb-connector-remote.mjs';

describe('MongoDB Local Connector Tests', function() {
  it('should connect to local database', async function() {
    // Act
    await connectToLocalDatabase();
    // Assert
    assert.ok(true);
  });
});

describe('MongoDB Remote Connector Tests', function() {
  it('should connect to remote database', async function() {
    // Act
    await connectToRemoteDatabase();
    // Assert
    assert.ok(true);
  });
});
