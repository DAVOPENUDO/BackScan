import mysql, { Connection } from 'mysql';
import dotenv from 'dotenv';

// Carga las variables de entorno
dotenv.config();

// Configuración de la conexión utilizando variables de entorno
const conexion: Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

export default conexion;

/**
 * host:'bwqn1owznctuodmrvh8z-mysql.services.clever-cloud.com',
    database:'bwqn1owznctuodmrvh8z',
    user:'u0xb7qtybkcl1wnq',
    password:'uBqMYLa4KJibQC5USpHO',
 */



/**
 * host:'db4free.net',
    database:'applista',
    user:'rootaapplist',
    password:'1f451a27',
 */


    /*
    host:'localhost',
    database:'applista_v2',
    user:'root',
    password:'',

    */









