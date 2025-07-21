import express from 'express';
import http from 'http';
import { Server } from 'socket.io'; // ✅ This line
import cors from 'cors';
import { handleSocketEvents } from './controllers/chatController.js';

const app = express();
const server = http.createServer(app); // ✅ Important for Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*', // allow all origins for dev
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

// Optional REST route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// ✅ SOCKET.IO INIT
io.on('connection', (socket) => {
  console.log(`⚡ New user connected: ${socket.id}`);
  handleSocketEvents(io, socket); // event handlers
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
