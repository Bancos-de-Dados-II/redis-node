const redis = require('redis');

const client = redis
    .createClient({url: 'redis://localhost:6379'});

const obj = {
    email: 'paulo@gmail.com',
    nome: 'paulo'
}

async function salvar(obj){
    await client.connect();
    const result = await client.set(obj.email, JSON.stringify(obj),{
        EX: 3600
    });
    console.log(result);
}

async function recuperar(email){
    await client.connect();
    const obj = await client.get(email);
    const objeto = JSON.parse(obj);
    console.log(objeto);
}

recuperar('paulo@gmail.com');

// salvar(obj);