const Socket = require('socket.io')
const io = new Socket.Server({
})
io.on('connection', socket => {
  console.log(`Socket ${socket.id} connected`)
  socket.emit('ho')
  socket.on('hey', _ => {
    setTimeout(() => {
      console.log('ho')
      socket.emit('ho')
    }, 1000);
  })
})
io.listen(5000)