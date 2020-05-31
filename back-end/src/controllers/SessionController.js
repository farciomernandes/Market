const connection = require('../database/connection');

module.exports ={

    async login(req, res){
        const { email, senha } = req.params;

        console.log("EMAIL: ", email)
        console.log("SENHA: ", senha)
         //Verifica se o email existe no BD
            const empresa = await connection('empresas')
            .where('email', email).select('*')
            .first();

            if(empresa){
                if(empresa.senha != senha){ //Verifica se a senha está correta
                    console.log('Senha incorreta!')
                    return res.status(202).json({err: 'Passowrd incorret!'})
                }
            }else{
                console.log('Email não está conectado a nenhuma empresa')
                return res.status(202).json({err: 'Email not found!'})
            }
            
        return res.json(empresa)
    }   

}