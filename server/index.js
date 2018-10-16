const express = require('express');
const morgan = require('morgan'); //es para saber que es lo que hace el midleware es una ayuda
const app = express();

const { mongoose } = require('./database');

//configuracion
app.set('port', process.env.PORT || 3000);
//middlewares -> entender datos 
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api/employees',require('./routes/enployee.routes'))
//Starting the server

app.listen(app.get('port'), () =>{
    console.log('server on port',app.get('port'));
});