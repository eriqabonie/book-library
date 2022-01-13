const app = require('./app');

const APP_PORT = process.env.PORT || 3000;

app.listen(APP_PORT, ()=> {
    console.log(`App is listening on port ${APP_PORT}`);
});