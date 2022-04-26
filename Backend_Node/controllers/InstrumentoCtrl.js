"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertInstrumento = exports.getInstrumentoXID = exports.getInstrumentos = void 0;
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
const getInstrumentoXID = (req, res) => new Promise((resolve, reject) => {
    const idArt = parseInt(req.params.id);
    db_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query('SELECT * FROM instrumento WHERE id = ?', [idArt], (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getInstrumentoXID = getInstrumentoXID;
const insertInstrumento = (req, res) => new Promise((resolve, reject) => {
    const { instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = req.body;
    var values = [instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion];
    db_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = 'INSERT INTO instrumento(instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({ message: "Error al tratar de insertar" });
                }
                else {
                    res.json({ message: "Instrumento Insertado con exito" });
                }
            });
        }
    });
});
exports.insertInstrumento = insertInstrumento;
