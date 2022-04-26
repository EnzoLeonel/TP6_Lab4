import { cxMysql } from '../database/db';
import { Request, Response } from "express";

export const getInstrumentos = (_req:Request, res:Response) => new Promise((_resolve, _reject) => {
    cxMysql.getConnection((err, connection) => {
        if (err){ 
          console.error(err);
          res.send(err);
          return;
        }
        console.log('MySQL Connection: ', connection.threadId);
        connection.query('SELECT * FROM instrumento', (err, results) => {
          if (err) console.error(err);
          //console.log('User Query Results: ', results);
          res.send(results);
        });
    });
});

export const getInstrumentoXID = (req:Request, res:Response) => new Promise((resolve, reject) => {
  const idArt = parseInt(req.params.id);
  cxMysql.getConnection((err, connection) => {
      if (err){
        console.error(err);
        res.send(err);
        return;
      } 
      connection.query('SELECT * FROM instrumento WHERE id = ?', [idArt], (err, results) => {
        if (err) console.error(err);
        res.send(results)
      });
    });
});

export const insertInstrumento = (req:Request, res:Response) => new Promise((resolve, reject) => {
    
  const {instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion} = req.body;
  var values = [instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion];
  cxMysql.getConnection((err, connection) => {
      if (err) {
          console.error(err);
          res.send(err);
          return;
      }
      else{
          let sql:string = 'INSERT INTO instrumento(instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
          connection.query(sql, values, (err, results) => {
              if (err) {
                console.error(err);
                res.json({message:"Error al tratar de insertar"})
              }else{
                res.json({message:"Instrumento Insertado con exito"})
              }
            });
      }          
    });
});