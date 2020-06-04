import express, { response, request } from 'express';

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

// Request Param: São parâmetros que vem na própria rota que identificam um usuário
// Query Param: São parâmetros que vem na propria rota geralmente opcionais para filtros e paginações
// Request Body: Parâmetros para criação/atualização de informações


const users = [
    'Diego',
    'Eliezer',
    'Paloma',
    'Luiz'   
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Eliezer',
        email: 'eliezerdrum@gmail.com'
    };

    return response.json(user);
})

app.listen(3333);