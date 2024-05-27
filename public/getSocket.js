//Connecting to the socket
const socket = io();

const pr = document.querySelector("pr");
socket.emit("Client", `Bought property: ${pr.innerHTML}`)