import Server from "./server/server.js"; //  Revisa que la carpeta se llame 'server' y no 'sever'

const server = new Server();

server.listen();

console.log('Servidor iniciado correctamente');
