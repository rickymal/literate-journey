const express = require('express')
const cors = require('cors');
// const bodyParser = require('body-parser')

const app = express()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}))
app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true,
}));


app.use(express.json());
app.use(express.urlencoded({
    extended : true,
}))

app.get('/',function(req,res){
    res.send("OK");
})

app.get('/api/login',function(req,res){
    console.log("Acessando o conteudo");
    const data = req.query

    console.log(data.username);
    console.log(data.password);




    res.status(200).send({
        test : "Isto é um json do node",
        query : {
            user : data.username,
            pass : data.password,
        },
    });
})


require('./app/controllers/index')(app);

app.listen(8000);