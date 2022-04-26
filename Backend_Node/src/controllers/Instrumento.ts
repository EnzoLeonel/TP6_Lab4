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

