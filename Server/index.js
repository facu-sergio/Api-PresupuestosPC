const express = require('express');
const morgan = require('morgan');
const app = express();
const cors =require('cors');


const { mongoose } = require('./database');



//Settings
app.set('port', process.env.PORT || 3000); // .set crea una "variable" que puede ser accedida desde cualquier parte de la aplicacion , process.... es para que use el port que le da el sistema

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));//servidor de desarrollo de Angular

//Routes
app.use('/api/presupuestos',require ('./routes/presupuesto.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});