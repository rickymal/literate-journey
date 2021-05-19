const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

var dt = DataTypes;
class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    password: dt.STRING,
    name: dt.STRING,
  },
  { sequelize, modelName: "user" }
);

class Challenge extends Model {}
class Judge extends Model {}
class Team extends Model {}
class Student extends Model {}
class Mentor extends Model {}
class Mentoring extends Model {}

Challenge.init(
  {
    challenger_name: dt.CHAR((length = 20)),
    challenger_enterprise: dt.CHAR((length = 20)),
    description: dt.TEXT,
  },
  { sequelize, modelName: "Challenge" }
);
Judge.init({}, { sequelize, modelName: "judger" });
Team.init(
  { noteJudger: dt.INTEGER, link_to_project: dt.TEXT },
  { sequelize, modelName: "team" }
);
Student.init(
  { function_user: dt.CHAR((length = 20)), description: dt.TEXT },
  { sequelize, modelName: "student" }
);
Mentor.init({}, { sequelize, modelName: "mentor" });

Challenge.hasOne(Judge);
Judge.belongsTo(Challenge);

User.hasOne(Judge);
Judge.belongsTo(User);

User.hasOne(Mentor);
Mentor.belongsTo(User);

User.hasOne(Student);
Student.belongsTo(User);

Challenge.hasMany(Team);
Team.belongsTo(Challenge);

Mentoring.init(
  {
    data_for_meeting: dt.DATE,
    link_for_meeting: dt.CHAR((length = 100)),
  },
  { sequelize, modelName: "mentoring" }
);

// um mentor possui muitas mentorias
// uma mentoria é pertencida a apenas um mentor
Mentor.hasMany(Mentoring);
Mentoring.belongsTo(Mentor);

// Uma time possui várias mentorias
// uma mentoria pertence a um único time
Team.hasMany(Mentoring);
Mentoring.belongsTo(Team);

Team.hasMany(Student);
Student.belongsTo(Team);

Challenge.hasMany(Mentor);
Mentor.belongsTo(Challenge);

(async () => {
  await sequelize.sync({ force: true });

  const rique = await User.create({
    username: "student@norolok.com",
    password: "123456789",
    name: "Estudante com time aleatório para teste",
  });

  const arique = await User.create({
    username: "another_student@norolok.com",
    password: "123456789",
    name: "Estudante sem time aleatório para teste",
  });

  const student_rique = await Student.create({
    userId: rique.id,
    function_user: "Engenheiro de processos",
    description:
      "Responsável por cuidar de processos de entrada e saída de fluxos de informação",
  });

  const student_arique = await Student.create({
    userId: arique.id,
    function_user: "Bibliotecário",
    description:
      "Eu sou formado em biblioteconomia, e digo a vós que estou sem time no momento",
  });

  // criando o jurado
  const user_judger = await User.create({
    username: "jurado@norolok.com",
    password: "123456789",
  });

  const judger_model = await Judge.create({
    userId: user_judger.id,
  });

  // criando um desafio para teste
  const gorilaz = await Challenge.create({
    challenger_name: "Gorillaz",
    challenger_enterprise: "Empresa da gorilândia",
    description:
      "Somos uma empresa muito inteligênte, que se preocupa com a saúde dos gorilas da america central",
  });

  const catamaranz = await Challenge.create({
    challenger_name: "Desafio catamarã",
    challenger_enterprise: "Empresa Catamarândia",
    description: "Uma empresa cujo foco é desenvolver pinturas de catamarã",
  });

  // criando o mentor
  const mentor_user = await User.create({
    username: "mentor@norolok.com",
    password: "123456789",
  });

  const mentor_model = await Mentor.create({
    userId: mentor_user.id,
  });

  mentor_model.setChallenge(gorilaz);

  var team = await Team.create({
    noteJudger: 0,
    link_to_project: "",
    ChallengeId: gorilaz.id,
  });

  student_rique.setTeam(team);

  var mentoring_model = await Mentoring.create({
    data_for_meeting: Date.now(),
    link_for_meeting: "",
  });
  mentor_model.addMentoring(mentoring_model);

  console.log("Created succesfull");
})();

module.exports = {
  Challenge,
  Judge,
  Team,
  Student,
  Mentor,
  Mentoring,
  User,
};
