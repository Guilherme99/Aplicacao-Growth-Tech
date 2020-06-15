import React, {useState, useEffect} from 'react';
import TopBar from '../../components/TopBar/index';
import Section from '../../components/Section/index';
import Loading from '../../components/Loading/index';
import axios from 'axios';

const Home = () => {

    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(()=> {
        
        (async () => {        
            setLoad(true);
            const response = await axios.get('http://localhost:3333/dataUsers');
            setUsers(response.data);
            setLoad(false);
        })();
        
    },[]);
    return(
        <>
            <TopBar/>        

            {
                load? <Loading/> :

                users.length===0? '' :
                    <>
                        <Section users={users} />        
                    </>
            }
        </>
    );
}

export default Home;