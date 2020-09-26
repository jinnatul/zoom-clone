const liveService = (io) => {
  io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
      socket
        .join(roomId);

      socket
        .to(roomId)
        .broadcast
        .emit('user-connected', userId);

      socket.on('disconnect', () => {
        socket.to(roomId).broadcast.emit('user-disconnected', userId);
      })
    })
  })
}

export default liveService;