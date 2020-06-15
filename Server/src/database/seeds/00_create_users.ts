import Knex from 'knex';
import axios from 'axios';

export async function seed(knex:Knex) {

    let urlPosts = 'http://jsonplaceholder.typicode.com/posts';

    const respPosts = await axios.get(urlPosts);
    const dataPosts = await respPosts.data;
    
    let resultPosts = dataPosts.map((ob: any) => 
        {
           return{
                title: ob.title,
                body: ob.body,
                userId: ob.userId
            }
        
        }
    )
    
     await knex('posts').insert(resultPosts);
}