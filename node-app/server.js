const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("¡Hola desde Node.js en Podman!");
});

server.listen(8082, () => {
    console.log("Servidor Node.js en ejecución en el puerto 8082");
});