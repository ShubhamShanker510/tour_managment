require('dotenv').config();
const express= require('express');
const cors=require('cors')
const connectDb = require('./database/db');
const tourRoutes=require('./routes/tour.route.js')
const app=express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const port= process.env.PORT || 3000;





app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true , 
    methods: 'GET, POST, PUT, DELETE',
  }));
  
app.use('/api',tourRoutes);

connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
})
.catch((err)=>{
    console.log('Connnection failed=>', err)
})