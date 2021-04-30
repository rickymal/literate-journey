import axios from '../../lib/_axios'

const url = 'http://127.0.0.1/login?' + new URLSearchParams({
    username : 'aluno3',
    password : 'fi123456789',
})


axios.get(url).then(function(data){
    console.log("Sucesso");
    console.log(data);
    console.log(data.json());
})
