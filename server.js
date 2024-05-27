const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

const listingsRouter = require("./routes/listings");
const publicPagesRouter = require("./routes/publicPages");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/listings", listingsRouter);
app.use("/", publicPagesRouter);

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('A User Connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('Client', (msg) => {
    console.log(msg)
  })
  io.emit('success', `You have successfully connected to our server!\n
  Continue browsing our services :)`)
});

http.listen(port, () => {
  console.log("App listening to: " + port);
});
