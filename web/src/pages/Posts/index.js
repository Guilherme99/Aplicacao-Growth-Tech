import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link, useParams} from 'react-router-dom';
import {Container,Owner, IssueList, Pesquisa} from './style';

import Loading from '../../components/Loading/index';

import {FiUser, FiHome, FiArrowLeft, FiSearch} from 'react-icons/fi';

const Posts = () => {
    const {id} = useParams();
    
    const [posts,setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(false);
    const [input, setInput]= useState('');
    const [data, setData] = useState([]);

    useEffect(()=> {
      (async () => {
        
        const response = await axios.get('http://localhost:3333/dataUsers');
        const user = await response.data.find(user => user.id==id);
        setUser(user);
        
      
      })();     
    
    },[id]);

    useEffect(() => {

      (async () => {       
        setLoad(true);
        const response = await axios.get(`http://localhost:3333/postsUser/${id}`);
        setPosts(response.data);
        setLoad(false);
      })();

    },[id]);

    function handleinput (event){
      setInput(event.target.value);
        
    }

    useEffect(()=> {
        
        if(input!==''){
            let newPosts = posts.filter(post => post.title.includes(input));
            setData(newPosts) ;
        }else{
            setData(posts);
        }

    }, [input, posts]);


      return (
        
        <>
          { 
            load? <Loading/> :

            user.length===0? '' : 
            <>
             <Container>
                 <Owner>
                  
                      <h1> <FiUser/> {user.name}</h1>
                      <p> <FiHome/> {user.company}</p> 
                  </Owner>
                  
                  <Link to={"/home"} > <FiArrowLeft/> Voltar</Link>
            </Container>    
            
             <IssueList>
                <Pesquisa>
                        <div className="inputpesquisa">
                            <input type="text" placeholder="Buscar post" name="seacrh" id="search" onChange={handleinput} value={input}/>
                            
                            <button>
                                <FiSearch/>
                            </button>
                        </div>
                    
                </Pesquisa>
              {
                data.map(post => (
                  <li key={post.id}>
                    #{post.id}
                      <div>
                            <strong>
                              <h4>{post.title}</h4>
                              <p>{post.body}</p>
                            </strong>
                            
                      </div>
                      
                  </li>
                ))
                }
             </IssueList>
              
             </>
            
          }
            
        </>
      );
  
}
  export default Posts;