import express from 'express';
import http from 'http';
import socket from 'socket.io';
import appRoute from './routers/appRoute';

const app = express();
const server = http.Server(app);
const io = socket(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));

// route
app.use(appRoute);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Magic run on ${port}`);
});