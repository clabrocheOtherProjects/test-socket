const Socket = require('socket.io')
const socket = new Socket.Server({
})
socket.on('connection', socket => {
  console.log(`Socket ${socket.id} connected`)
  socket.emit('ho')
  socket.on('hey', _ => {
    setTimeout(() => {
      console.log('ho')
      socket.emit('ho')
    }, 1000);
  })
})
socket.listen(5000)