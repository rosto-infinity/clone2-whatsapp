@# Structure du Projet
#Dossiers
#config
•	db.js: Configuration et connexion à la base de données MongoDB.
#controllers
•	messageControllers.js: Gestion des requêtes relatives aux messages.
•	userControllers.js: Gestion des requêtes relatives aux utilisateurs.
#middlewares
•	authMiddleware.js: Middleware d'authentification.
•	errorsMiddleware.js: Middleware de gestion des erreurs.
#models
•	messageModels.js: Modèle de données pour les messages.
•	userModels.js: Modèle de données pour les utilisateurs.
#routes
•	messageRoutes.js: Routes pour les messages.
•	userRoutes.js: Routes pour les utilisateurs.
#utilities
•	hashPassword.js: Fonctions utilitaires pour le hachage des mots de passe.
@jsonWebToken.js: Fonctions utilitaires pour la gestion des JSON Web Tokens (JWT).
Dépendances
#Dependencies
@: Effectuer des requêtes HTTP depuis le serveur.
@bcryptjs: Sécuriser les mots de passe en les chiffrant.
@dotenv: Charger des variables d'environnement à partir d'un fichier .env.
@express: Framework web minimaliste pour créer des applications web et des API.
@jsonwebtoken: Générer et vérifier les JSON Web Tokens (JWT) pour l'authentification et l'autorisation.
•	@mongodb: Pilote pour se connecter à une base de données MongoDB.
•	@mongoose: Bibliothèque d'Object-Document Mapping (ODM) pour interagir avec MongoDB de manière simplifiée et structurée.
	@socket.io: Bibliothèque pour la communication en temps réel bidirectionnelle entre le serveur et le client.
#DevDependencies
@concurrently: Exécuter plusieurs commandes simultanément dans le terminal.
@nodemon: Redémarrer automatiquement le serveur lorsqu'un fichier est modifié.
@webpack-dev-server: Serveur de développement avec rechargement à chaud (hot-reloading) des modifications de code JavaScript.
#packages sont utilisés pour développer des applications web avec des fonctionnalités de communication en temps réel, de gestion des requêtes HTTP, de sécurisation des mots de passe, d'interactions avec une base de données MongoDB, etc
