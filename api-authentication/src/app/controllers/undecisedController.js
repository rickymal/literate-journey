const express = require('express');
// const { Model } = require('mongoose');
// const { where } = require('sequelize/types');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const Models = require('../models/models')
const { DataTypes }  = require('sequelize')

router.use(authMiddleware);

router.get('/',function(req,res){
    res.send({ ok : true, user : req.userId})
})

router.get('/getChallenges',async function(req,res){
    console.log("Entrando na rota disposable");
    var challenges = await Models.Challenge.findAll();




    return res.status(200).json({
        rota : "Rota disposable mentor",
        challenges,
    })
})



router.post('/selectChallenge',async function(req,res){
    console.log("Entrando na rota selectChallenge")
    var ChallengeId = parseInt(req.query.ChallengeId);

    
    // recuperar o usuário que está fazendo a requisição.
    var user = await Models.User.findOne({where : {id: req.userId}})
    var student = await user.getStudent();

    // criar um time automaticamente
    var team = await Models.Team.create({
        noteJudger : 0,
        link_to_project : "",
        ChallengeId : ChallengeId
    })

    student.setTeam(team)

    console.log(typeof student)
    console.log(student)
    return res.status(200).json({
        userId : req.userId,
        user,
        student,
        team,
    })
})


router.get('/mentors',async function(req,res){

    console.log("Entrando na rota dos mentores")
    // obter o desafio
    var user = await Models.User.findOne({where : {id: req.userId}})
    var student = await user.getStudent();
    var team  = await student.getTeam();
    var challenge = await team.getChallenge();
    if (!challenge){
        return res.status(400).send("O usuário em questão não possui um time ou não possui um desafio escolhido")
    }

    console.log("Desafio encontrado! ");
    console.log(challenge)
    console.log(challenge.id)

    // obter a lista de mentores que possuem esse desafio
    var mentors = await Models.Mentor.findAll({where : {ChallengeId : challenge.id}})

    

    // extrair da tabela mentoring as mentorias disponíveis
        // para fazer isso preciso automatizar a criação do time no arquivo
        // por hora eu vou fazer uma gambiarra aqui

    // criando mentorias disponíveis para serem chamadas
    try {
        await Models.Mentoring.create({
            data_for_meeting : new Date(
                year = 2021,
                month = 5,
                day = 4,
                hour = 15,
                minute = 30,
            ),
            link_for_meeting : "",
            mentorId : mentors[0].id,
            teamId : null,
        })

    } catch (err) {
        return res.status(400).json({
            err,
        })
    }

    return res.status(200).json({
        mentors
    })
    
})

module.exports = app => app.use('/etc',router);