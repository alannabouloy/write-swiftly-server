const app = require('./app');
const Sequelize = require('sequelize');
const { PORT, TEST, DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST } = require('./config');

const db = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: 'postgres'
})

app.set('db', db);

app.get('/', (request,response) => response.send(TEST));
app.listen(PORT, () => console.log(`Listening: port ${ PORT }`));