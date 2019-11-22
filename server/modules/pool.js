const pg = require('pg');

const config = {
    database: 'weekend_to_do_app',
    host: 'Localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on('connect', ()=>{
    console.log('connected to postgres');
});

pool.on('error', (err)=>{
    console.log('error connecting to postgres');
});

module.exports = pool;