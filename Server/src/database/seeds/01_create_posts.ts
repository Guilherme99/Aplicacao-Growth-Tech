import Knex from 'knex';
import axios from 'axios';

export async function seed(knex:Knex) {

    let url = 'http://jsonplaceholder.typicode.com/users';

    const respUsers = await axios.get(url);
    const dataUsers = await respUsers.data;
    
    let resultUsers = dataUsers.map((ob: any) => 
        {
           return{
                name: ob.name,
                company: ob.company.name
            }
        
        }
    )
    
    await knex('users').insert(resultUsers);
}