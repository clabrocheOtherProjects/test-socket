const Socket = require('socket.io-client')
const socket = Socket('http://localhost:5000')
socket.on('connect', _ => {
  console.log('connected')
  
})
socket.on('ho', _ => {
  setTimeout(() => {
    console.log('hey')
    socket.emit('hey')
  }, 1000);
})