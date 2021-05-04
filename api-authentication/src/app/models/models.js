const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
dialect : 'sqlite',
storage : 'database.sqlite',
});

var dt = DataTypes;
class User extends Model {}
User.init({
  username: DataTypes.STRING,
  password : dt.STRING,
}, { sequelize, modelName: 'user' });



class Challenge extends Model {}
class Judge extends Model {}
class Team extends Model {}
class Student extends Model {}
class Mentor extends Model {}
class Mentoring extends Model {}
// class Mentoring extends Model {}

Challenge.init({challenger_name : dt.CHAR(length = 20),challenger_enterprise : dt.CHAR(length = 20),description : dt.TEXT,},{sequelize,modelName : "Challenge"})
Judge.init({},{sequelize, modelName : "judger"})
Team.init({ noteJudger : dt.INTEGER, link_to_project : dt.TEXT},{sequelize, modelName : "team"})
Student.init({function_user : dt.CHAR(length=20), description : dt.TEXT},{sequelize, modelName : "student"});
Mentor.init({},{sequelize, modelName : "mentor"})


//Judge.hasOne(Challenge)
//Challenge.belongsTo(Judge)

Challenge.hasOne(Judge)
Judge.belongsTo(Challenge)



User.hasOne(Judge)
Judge.belongsTo(User)

User.hasOne(Mentor)
Mentor.belongsTo(User)

User.hasOne(Student)
Student.belongsTo(User)


Challenge.hasMany(Team)
Team.belongsTo(Challenge)

Mentoring.init({
  data_for_meeting : dt.DATE,
  link_for_meeting : dt.CHAR(length = 100),
},{sequelize, modelName : "mentoring"})

Mentor.belongsToMany(Team,{
  through : Mentoring,
})

Team.belongsToMany(Mentor,{
  through : Mentoring,
})


Team.hasMany(Student)
Student.belongsTo(Team)


Challenge.hasMany(Mentor)
Mentor.belongsTo(Challenge);


(async () => {
  await sequelize.sync({ force : true});

  
  const rique = await User.create({
    username: 'henriquemauler@gmail.com',
    password : 'he147369',
  });
  const arique = await User.create({
    username : "henriquemauler@outlook.com",
    password : 'fi1247369',
  });


  

  const student_rique = await Student.create({
    userId : rique.id,
    function_user : "faz-tudo",
    description : "Eu sou um mero estudante tentando fazer algo",
  });
  const student_arique = await Student.create({
    userId : arique.id,
    function_user : "faz-tudo",
    description : "Eu sou um mero estudante tentando fazer algo",
  });

  // criando o jurado
  const user_judger = await User.create({
    username : "jurado@gmail.com",
    password : "fi147369",
  });

  const judger_model = await Judge.create({
    userId : user_judger.id,
  })


  // criando um desafio para teste
  const gorilaz = await Challenge.create({
    challenger_name : "Gorillaz",
    challenger_enterprise : "Empresa da gorilândia",
    description : "Somos uma empresa muito top, nosso desafio é que você a deixer ainda melhor",
  })


  const catamaranz = await Challenge.create({
    challenger_name : "Desafio catamarã",
    challenger_enterprise : "Empresa Catamarândia",
    description : "não tivemos nenhuma ideia de descrição, nos desculpem, se virem!",
  })

  // criando o mentor 
  const mentor_user = await User.create({
    username : "mentor@gmail.com",
    password : "fi147369",

  });

  const mentor_model = await Mentor.create({
    userId : mentor_user.id,
  });

  mentor_model.setChallenge(gorilaz)
  

  console.log("Created succesfull");
})();



module.exports = {
  Challenge, Judge, Team, Student, Mentor, Mentoring, User
}