const express = require('express');
const bcrypt = require('bcryptjs');
// const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { Sequelize, Model, DataTypes, Op } = require('sequelize');
const Models = require('../models/models')


const authConfig = require('../../config/auth.json');
// const { Model } = require('mongoose');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn : 86400,
    })
}

router.post('/register',async (req,res) => {

    const { email } = req.body;
    console.log("Entrando no registro de e-mail com o e-mail: " + email);
    try {
        /*
        if (await User.findOne({email})) {
            return res.status(400).send({ "error" : "Usuário já existe"})
        }
        */
       
        var a = await Models.User.findOne({ where : { username : email}});
        console.log(a);


        if (a) {
            return res.status(400).send({ "error" : "Usuário já existe"})
            
        }
        console.log("Usuário não encontrado! isso é bom!");
        
        
        // const user = await User.create(req.body);
        const user = await Models.User.create({
            username : req.body.email,
            password : req.body.password,
        });


        const model_student = await Models.Student.create({
            function_user : req.body.function_user,
            description : req.body.description,
            userId : user.id,
            teamId : null,
        })

        user.password = undefined;        
        console.log("Usuário criado com sucesso!");

        return res.send({user : user.toJSON(), token : generateToken({ id : user.id }), student : model_student.toJSON()})
        
    } catch (err) {
        return res.status(400).send({ error : 'Registro falho', causa : err});
    }
})

router.post('/authenticate', async (req,res) => {
    const {email, password } = req.body;
    // console.log("ENTRNADO");
    //const user = await User.findOne({ where : {username : email}});
    var user  = await Models.User.findOne({ where : { username : email}});
    
    if(!user) {
        console.log('usuário não encontrado')
        return res.status(400).send({
            error : "Usuário não encontrado",
        })
    }
    
    // não vou criptografar a senha por hora
    /*
    if(!await bcrypt.compare(password,user.password)){
        return res.status(400).send({
            error : 'senha invalida',
        })
    }
    */

    user.password = undefined;
    var student = await user.getStudent(); // o comando retornar uma promise

    console.log("mostrando o estudante")
    console.log(student)

    const token = generateToken({ id : user.id })
    res.send({user, token, student});
})

module.exports = app => app.use('/auth', router);