import axios from '../../lib/_axios'


const url = 'login?' + new URLSearchParams({
    username : 'aluno3',
    password : 'fi123456789',
})

export default async function handler(req,res) {

    await axios.get(url).then(function(d){
        console.log("Sucesso apenas o corpo");
        console.log(d.data);
        console.log("Agora com tudo");
        console.log(d);
        console.log("Só o cabeçalho");
        console.log(d.headers);
        console.log(d.headers['set-cookie']);
        console.log(d.headers['set-cookie'][1]);

        var temp = d.headers['set-cookie'][1].split(";")[0].split("=")[1]

        console.log("Sessão");
        console.log(temp);
        
    })
    
    res.status(200).json({
        text : 'hello with cookie to base'
    })
}

