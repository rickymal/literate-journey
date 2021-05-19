const express = require("express");
// const { Model } = require('mongoose');
// const { where } = require('sequelize/types');
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const Models = require("../models/models");

router.use(authMiddleware);

router.get("/", function (req, res) {
  res.send({ ok: true, user: req.userId });
});

router.get("/getChallenges", async function (req, res) {
  console.log("Entrando na rota disposable");
  var challenges = await Models.Challenge.findAll();

  return res.status(200).json({
    rota: "Rota disposable mentor",
    challenges,
  });
});

router.post("/selectChallenge", async function (req, res) {
  console.log("Entrando na rota selectChallenge");
  var ChallengeId = parseInt(req.query.ChallengeId);

  // recuperar o usuário que está fazendo a requisição.
  var user = await Models.User.findOne({ where: { id: req.userId } });
  var student = await user.getStudent();

  // criar um time automaticamente
  var team = await Models.Team.create({
    noteJudger: 0,
    link_to_project: "",
    ChallengeId: ChallengeId,
  });

  student.setTeam(team);

  console.log(typeof student);
  console.log(student);
  return res.status(200).json({
    userId: req.userId,
    user,
    student,
    team,
  });
});

router.get("/mentors", async function (req, res) {
  console.log("Entrando na rota dos mentores");
  // obter o desafio
  var user = await Models.User.findOne({ where: { id: req.userId } });
  var student = await user.getStudent();
  var team = await student.getTeam();
  var challenge = await team.getChallenge();
  if (!challenge) {
    return res
      .status(400)
      .send(
        "O usuário em questão não possui um time ou não possui um desafio escolhido"
      );
  }

  console.log("Desafio encontrado! ");
  console.log(challenge);
  console.log(challenge.id);

  // obter a lista de mentores que possuem esse desafio
  var mentors = await Models.Mentor.findAll({
    where: { ChallengeId: challenge.id },
  });

  // extrair da tabela mentoring as mentorias disponíveis
  // para fazer isso preciso automatizar a criação do time no arquivo
  // por hora eu vou fazer uma gambiarra aqui

  // criando mentorias disponíveis para serem chamadas

  console.log("Fazendo a adição de um time para o mentor");

  // obter a lista de mentorias disponíveis baseada no time do usuário
  // var lof_mentorings = await Models.Mentoring.findAll({where : {}})

  /*
    Obter a lista de mentorias disponíveis cujo mentor de tal mentoria seja do mesmo desafio que o usuário
    para mais informações ler a sessão de Edger loading do sequelize
    */

  var all_mentorings = await Models.Mentoring.findAll({
    where: {},
    include: [
      {
        model: Models.Mentor,
        where: {
          ChallengeId: challenge.id,
        },
        required: true,
      },
    ],
  });

  console.log(all_mentorings);

  return res.status(200).json({
    mentors,
    all_mentorings,
  });
});

router.post("/select_mentor", async function (req, res) {
  const mentor_id = req.query.id;
  try {
    console.log("id do mentor : " + mentor_id);
    var mentor = await Models.Mentor.findOne({ where: { id: mentor_id } });

    console.log("mentor : " + mentor);
    // var lof_mentorings = await mentor.getMentorings();

    console.log("mentor " + mentor);
    // console.log("list of mentors: " + lof_mentorings)
    // console.log("typeof lof" + lof_mentorings)

    var user = await Models.User.findOne({ where: { id: req.userId } });
    var student = await user.getStudent();
    var team = await student.getTeam();

    console.log(JSON.stringify(team));

    await Models.Mentoring.update(
      { teamId: team.id },
      {
        where: {
          mentorId: mentor_id,
        },
      }
    );

    return res.status(200).send("Mentoria selecionada com sucesso");
  } catch (e) {
    console.log("algo de errado n está certo ");
  }
});

module.exports = (app) => app.use("/etc", router);
