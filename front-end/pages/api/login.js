import axios from '../../lib/_axios'

export default async function handler(req,res){
    //...
    const url = 'login?' + new URLSearchParams({
        username : 'aluno3',
        password : 'fi123456789',
    })

    const d = await axios.get(url)
    var session = d.headers['set-cookie'][1].split(';')[0].split('=')[1];



    
    res.setHeader("Set-Cookie",`sessionid=${session}; SameSite=Strict; Secure; Path=/`,)

    res.status(200).json(d.data)

    
}