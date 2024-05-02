import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      console.log(decoded);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        success: false,
        error: error.message,
      });
    }
  }

  if (!token) {
    res.status(401).json({
      success: false,
      error: 'Aucune autorisation de token ',
    });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      success: false,
      error: 'Espace Reservé aux administrateurs ',
    });
  }
};

export { protect, admin };
