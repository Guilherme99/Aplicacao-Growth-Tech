import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';

import {Link, useParams} from 'react-router-dom';
import {Container,Owner, IssueList, Pesquisa, PaginationPosts} from './style';

import Loading from '../../components/Loading/index';

import {FiUser, FiHome, FiArrowLeft, FiSearch} from 'react-icons/fi';

import 'antd/dist/antd.css';

import {Pagination} from 'antd';

const Posts = () => {
    const {id} = useParams();
    
    const [posts,setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(false);
    const [input, setInput]= useState('');
    const [data, setData] = useState([]);

    const [pageSize, setPageSize] = useState(5);
    const [current, setCurrent] = useState(1);

    const paginatedPosts = useMemo(() => {
        const lastIndex = current*pageSize;
        const firstIndex = lastIndex - pageSize;

        return data.slice(firstIndex, lastIndex);

    }, [current, pageSize, data]);

    useEffect(()=> {
      (async () => {
        
        const response = await axios.get('http://192.168.0.105:3333/dataUsers');
        const user = await response.data.find(user => user.id==id);
        setUser(user);
        
      
      })();     
    
    },[id]);

    useEffect(() => {

      (async () => {       
        setLoad(true);
        const response = await axios.get(`http://192.168.0.105:3333/postsUser/${id}`);
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
                paginatedPosts && 
                paginatedPosts.map((post, index) => (
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
              <PaginationPosts>
                  <Pagination 
                    basic
                    showSizeChanger 
                    onShowSizeChange={setPageSize} 
                    pageSize={pageSize}
                    total={data.length}  
                    defaultCurrent={current}
                    onChange={setCurrent}
                  />
              </PaginationPosts>
              
             </>
            
          }
            
        </>
      );
  
}
  export default Posts;