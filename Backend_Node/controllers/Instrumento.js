"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstrumentos = void 0;
const db_1 = require("../database/db");
const getInstrumentos = (_req, res) => new Promise((_resolve, _reject) => {
    db_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        console.log('MySQL Connection: ', connection.threadId);
        connection.query('SELECT * FROM instrumento', (err, results) => {
            if (err)
                console.error(err);
            //console.log('User Query Results: ', results);
            res.send(results);
        });
    });
});
exports.getInstrumentos = getInstrumentos;
