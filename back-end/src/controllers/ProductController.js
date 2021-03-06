const connection = require('../database/connection');
const crypto = require("crypto");

module.exports ={
    async create(req, res){
        const { product, description, photo, price, empresa_email } = req.body;
        
        console.log("PRODUTO QUE CHEGOU: ",product);

        console.log('EMAIL: ',empresa_email)
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('products').insert({
            id,
            product,
            description,
            empresa_email,
            photo,
            price
        }).catch(err=>{console.log('DEU RUIN -> ', err)})

        return res.json({product, id, empresa_email})
    },

    async index(req, res){
        const { email } = req.params;
        const products = await connection('products').where('email', email)
        .join('empresas', 'products.empresa_email', '=', 'empresas.email')
        .select([
            'empresas.empresa',
            'empresas.whatsapp',
            'empresas.email',
            'products.product',
            'products.description',
            'products.id',
            'products.photo',
            'products.price'
        ])
        return res.json(products)
    },
    async delete(req, res){
        const { empresa_email, id } = req.params;
        console.log('EMPRESA QUE VEIO: ',empresa_email)
        console.log('ID QUE VEIO: ',id)

        const produto = await connection('products')
        .where('id', id).select('*').first();

        if(produto.empresa_email != empresa_email){
            res.status(404).json({error: "Operation not permitted!"})
        }
        
        await connection('products')
        .where('id', id)
        .delete();
        res.status(204).send();


    }
}