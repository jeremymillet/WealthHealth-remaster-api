import sqlite3 from 'sqlite3';

// Création et gestion de la connexion à la base de données
const db: sqlite3.Database = new sqlite3.Database('./wealth_health.db', (err: Error | null) => {
    if (err) {
        console.error('Erreur lors de l’ouverture de la base de données :', err.message);
    } else {
        console.log('Connexion réussie à la base de données SQLite.');
    }
});

// Exporter l'objet `db` pour utilisation dans d'autres fichiers
export default db;