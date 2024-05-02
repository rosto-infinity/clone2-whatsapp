import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    message: {
      type: String,
      required: [true, 'Entrez votre nom svp!'],
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    image: {
      type: String,
    },
    senderId: {
      type: String,
      required: true,
    },
    receverId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }  //Ajoute automatiquement l-heure que l'user aenvoyer le msg
);

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
