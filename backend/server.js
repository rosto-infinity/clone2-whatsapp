import path from 'path';
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import db from './config/db.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

const server = http.createServer(app);
const io = new Server(server);
dotenv.config();
db();

app.use(express.json());

app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

const connectedClients = [];

io.on('connection', (socket) => {
  console.log('Utilisateur connecté', socket.id);

  socket.on('connected', (data) => {
    console.log(data);
    const { name, phone, _id } = data;
    const user = connectedClients.find((user) => user.userId === _id);

    if (!user) {
      connectedClients.push({
        socketId: socket.id,
        username: name,
        userId: _id,
        phone,
      });
      io.emit('userConnected', connectedClients);
    }
  });

  socket.on('message', (data) => {
    const recipientSocket = connectedClients.find(
      (client) => client.userId === data.receverId
    );

    if (recipientSocket) {
      io.to(recipientSocket.socketId).emit('sendmessage', data);
    }
  });

  socket.on('disconnect', () => {
    const disconnectedUserIndex = connectedClients.findIndex(
      (client) => client.socketId === socket.id
    );

    if (disconnectedUserIndex !== -1) {
      const disconnectedUser = connectedClients[disconnectedUserIndex];
      connectedClients.splice(disconnectedUserIndex, 1);
      io.emit('userConnected', connectedClients);
      console.log(`Utilisateur ${disconnectedUser.username} déconnecté`);
    }
  });
});

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Api envoyé');
  });
}

const port = 5001;
server.listen(port, () => {
  console.log(`application lancé au ${port}`);
});
