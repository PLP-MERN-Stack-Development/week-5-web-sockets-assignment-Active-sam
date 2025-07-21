export const handleSocketEvents = (io, socket) => {
  // Listen for incoming messages
  socket.on('chatMessage', (data) => {
    io.emit('chatMessage', data); // Broadcast to everyone
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
};
