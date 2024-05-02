// Importation du module mongoose
import mongoose from 'mongoose';

// Définition du schéma de données pour l'utilisateur
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Entrez votre nom svp!'], // Le nom d'utilisateur est requis
    },
    phone: {
      type: String,
      required: true, // Le numéro de téléphone est requis
    },
    password: {
      type: String,
      required: [true, 'Entrez votre mot de passe svp!'], // Le mot de passe est requis
    },
    image: {
      type: String,
    },
  },
  { timestamps: true } // Ajoute automatiquement l-heure que l'user a creeer son compte
);

// Exportation du modèle d'utilisateur créé à partir du schéma
export default mongoose.models.User || mongoose.model('User', UserSchema);