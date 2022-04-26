import express from "express";
import http from 'http';
const app = express();
import routes from "./routes";

app.use(express.json());
app.use(express.urlencoded({extended:false}));

import {cxMysql} from './database/db';
cxMysql.getConnection;

app.use(routes);

var server = http.createServer(app);
var port: string = process.env.PORT || '3000';

server.listen(port);
console.log('Servidor iniciado');