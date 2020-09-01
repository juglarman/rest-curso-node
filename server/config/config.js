//puerto
process.env.PORT = process.env.PORT || 3000;
//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
//seed
process.env.SEED = process.env.SEED || 'el-seed-desarrollo';


let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/Cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URL_DB = urlDB

//googleclientid

process.env.CLIENT_ID = process.env.CLIENT_ID || '786097004134-fjrp3cjno5bo8g3nn03ir02crvn515qg.apps.googleusercontent.com';