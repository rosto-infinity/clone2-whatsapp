// Importation des modules et des fichiers nécessaires
import User from "../models/userModels.js"; // Importe le modèle d'utilisateur
import { hashPassword, verifyPssword } from "../utilities/hashPassword.js"; // Importe les fonctions de hachage et de vérification des mots de passe
import generateToken from "../utilities/jsonWebToken.js"; // Importe la fonction de génération de jeton JWT
import Message from "../models/messageModels.js"; // Importe le modèle de message

// Fonction de contrôleur pour l'enregistrement des utilisateurs
const register = async (req, res) => {
  const { username, phone, password, image } = req.body; // Récupère les données du corps de la requête
  try {
    const userExist = await User.findOne({ phone }); // Vérifie si un utilisateur avec le même numéro de téléphone existe déjà
    if (userExist) {
      // Si un utilisateur existe déjà, renvoie une erreur
      res.status(400);
      throw new Error("Email déjà utilisé");
    }

    const passhash = await hashPassword(password); // Hache le mot de passe fourni

    const user = await User.create({
      // Crée un nouvel utilisateur dans la base de données
      username,
      phone,
      password: passhash,
      image,
    });
    if (user) {
      // Si la création de l'utilisateur réussit, renvoie les informations de l'utilisateur avec un jeton JWT
      res.status(201).json({
        _id: user._id,
        name: user.username,
        phone: user.phone,
        image: user.image,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    // Gestion des erreurs
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// Fonction de contrôleur pour l'authentification des utilisateurs
const auth = async (req, res) => {
  const { phone, password } = req.body; // Récupère le numéro de téléphone et le mot de passe du corps de la requête
  try {
    const user = await User.findOne({ phone }); // Recherche l'utilisateur correspondant dans la base de données
    console.log(user);
    if (user && (await verifyPssword(password, user.password))) {
      // Si l'utilisateur existe et que le mot de passe correspond
      res.json({
        // Renvoie les informations de l'utilisateur avec un jeton JWT
        _id: user._id,
        name: user.username,
        phone: user.phone,
        image: user.image,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    // Gestion des erreurs
    console.log(error);
    res.status(400).json({
      success: false,
      message: `Mot de passe ou numéro de télephone introuvable`,
    });
  }
};

// Fonction de contrôleur pour récupérer le profil utilisateur
const UserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Récupère les informations de l'utilisateur à partir de son ID
    res.status(201).json(user); // Renvoie les informations de l'utilisateur dans la réponse
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Fonction de contrôleur pour récupérer la liste des utilisateurs
const UsersList = async (req, res) => {
  try {
    const users = await User.find({ _id: { $nin: req.user.id } }); // Récupère tous les utilisateurs, à l'exception de l'utilisateur actuellement authentifié
    const usersWithLastMessage = await Promise.all(
      // Pour chaque utilisateur, recherche le dernier message échangé avec l'utilisateur actuel
      users.map(async (user) => {
        const lastMessage = await Message.findOne(
          {
            $or: [
              { $and: [{ receverId: user._id }, { senderId: req.user.id }] },
              { $and: [{ receverId: req.user.id }, { senderId: user._id }] },
            ],
          },
          {},
          { sort: { createdAt: -1 } }
        ).limit(1);
        return { user, lastMessage };
      })
    );
    return res.status(200).json(usersWithLastMessage); // Renvoie la liste des utilisateurs avec leur dernier message dans la réponse
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Fonction de contrôleur pour récupérer un utilisateur par son ID
const getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Récupère les informations de l'utilisateur par son ID
    res.status(201).json(user); // Renvoie les informations de l'utilisateur dans la réponse
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Exporte les fonctions de contrôleur pour les rendre accessibles à d'autres parties de l'application
export { register, auth, UserProfile, UsersList, getUsersById };
