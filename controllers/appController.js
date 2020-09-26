const liveService = (io) => {
  io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
      socket
        .join(roomId);
      socket
        .to(roomId)
        .broadcast
        .emit('user-connected', userId);
    })
  })
}

export default liveService;