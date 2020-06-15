import express from 'express';
import cors from 'cors';
import  Knex from './database/connection';
import {Request, Response} from 'express';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/dataUsers", async (request:Request, response:Response) => {
    const users = await Knex('users').select('*');

    response.json(users);
});

app.get("/postsUser/:id", async (request:Request, response:Response) => {
    const {id} = request.params;

    const user = await Knex('users').where('id',id).first();

    const posts = await Knex('posts').select('*').where('userId', user.id);

    response.json(posts);
});

app.listen(3333);