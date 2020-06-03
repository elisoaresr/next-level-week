import express, { response } from 'express';

const app = express();

// Rota seria o endereço completo da requisição //
// Recurso é qual entidade estamos acessando no sistema Ex: /Users

//GET - Busca uma ou mais informações no back-end
//POST - Cria uma nova infomação no back-end
//PUT - Atualizar uma informação existente no back end
//DELETE - Remover uma informação no Back-end


// POST: http://localhost:3333/users = Criar um usuário
// GET: http://localhost:3333/users = Listar usuários
// GET: http://localhost:3333/users/5 = Buscar dados do usuário com ID: 5

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Diego',
        'Eliezer',
        'Paloma'
    ]);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Eliezer',
        email: 'eliezerdrum@gmail.com'
    };

    return response.json(user);
})

app.listen(3333);