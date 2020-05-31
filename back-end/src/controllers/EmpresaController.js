const connection = require('../database/connection');

module.exports ={
    
    async create(req, res){
        const {empresa, description, whatsapp, email, senha, uf, city, photo } = req.body;
   
        
        await connection('empresas').insert({
            email,
            senha,
            empresa,
            description,
            email,
            whatsapp,
            uf,
            city,
            photo
        }).catch(error=>{console.log('DEU RUIM  ->  ',error)})
        
        return res.json({email, senha, empresa})
    },

    async index(req, res){
        
        const empresas = await connection('empresas')
        .select('*')
        .catch(error=>{console.log('DEU RUIM PEGAR -> ', error)})


        return res.json(empresas);    
        
    },
    async delete(req, res){
        const { email } = req.body; //Empresa logada

        const login = await connection('empresas')
        .where('email', email).select('*').first();

        if(login.email != email){
            return res.status(404).json({error: "Operation not permitted!"})
        }

        await connection('empresas').where('email', email)
        .delete();
        res.status(204).send();
    }

}