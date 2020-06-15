import React, {useState, useEffect} from 'react';
import {Content, Button, Pesquisa} from './style';
import {Link} from 'react-router-dom';
import {FiFileText, FiSearch} from 'react-icons/fi';
const Section =  ({users}) => {
    const [input, setInput]= useState('');
    const [data, setData] = useState([]);

    function handleinput (event){
        setInput(event.target.value);
        
    }

    useEffect(()=> {
        
        if(input!=''){
            let newUsers = users.filter(user => user.name.includes(input));
            setData(newUsers) ;
        }else{
            setData(users);
        }
        
    }, [input, users]);

    return(

        <Content>

            <Pesquisa>
                    <div className="inputpesquisa">
                        <input type="text" placeholder="Buscar usuário" name="seacrh" id="search" onChange={handleinput} value={input}/>
                        
                        <button>
                            <FiSearch/>
                        </button>
                    </div>
                
            </Pesquisa>
               <ul className="Users">                
                    <li className="users__info">
                            <h4 className="titulo">Usuário</h4>
                            <h4 className="titulo">Empresa</h4>

                    </li>
                    
                </ul>
          

        {
            data!==''? 
            data.map(user => (
                <>
              
                    <ul className="Users" key={user.id}>
                        <li className="users__info">
                            <h4>{user.name}</h4>
                            <h4>{user.company}</h4>
                        </li>                
                        
                        <Button><Link to={`/posts/${user.id}`}> <FiFileText/> Posts</Link> </Button>
            
                    </ul>
                </>
            )) : ''

        }

        </Content>

    )
}

export default Section;