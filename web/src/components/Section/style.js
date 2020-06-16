import styled from 'styled-components';

export const Content = styled.div`
    display:flex;
    margin:5% auto;
    width:80%;
    height: 100%;
    flex-direction: column;
    text-align:center;
    background: #fff;

    
    .Users{
        display:flex;
        flex-direction: row;
        align-items:center; 
        width:100%;
        height:10vh;
        z-index:9;
        font-family: 'Courier New', Courier, monospace;
        font-size:12px;

        .users__info{
            display:flex;
            flex-direction: row;
            align-items:center;
            justify-content:space-around;
            width:90%;
            background: #fff;
        }
        & + .Users{
            border-top: 1px solid #cecece;
            &:hover{
                background: rgb(155,125,204);

                &:hover .users__info{
                    background: rgb(155,125,204);
                    color:#fff;
                }
            }
        }

        .titulo{
            position:relative;
            padding: 5px 10px;
            font-size: 18px;

        }

    }

    @media (max-width:550px){
        padding: 0;
        text-wrap:wrap;
        .Users{
            font-size:11px;
        }
    }
`;

export const Button = styled.button`
    position:relative;
    padding: 5px 15px;
    top:0;    
    background-color:rgb(155,125,204);
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    justify-content:right;
    right: 5%;
    font-family: 'Courier New', Courier, monospace;


    a{
        text-decoration:none;
        color:#fff;
    }

    @media (max-width:550px){
        padding: 2px 5px;
        right: 2px;
    }
`;

export const Pesquisa = styled.div`
    width:100%;
    margin-top: 10px;
    border-radius:5px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:right;
    padding-right:5%;
    font-family: 'Courier New', Courier, monospace;

    
    .inputpesquisa{
        width:35%;
        background:#fff;
        display:flex;
        flex-direction:row;
        font-family: 'Courier New', Courier, monospace;

        
        input{
            width:80%;
            padding: 8px 15px;            
            border: 1px solid #cecece;
            font-size:15px;
            border-radius: 5px 0px 0px 5px;
        }

        button{
            width:50px;
            padding: 4px 10px;            
            border: 1px solid #cecece;
            font-size:15px;    
            border-radius: 0 5px 5px 0px;
        }
    }
    

    @media (max-width:550px){
        padding-right:10%;
    }

    @media (min-width:750px){
        .inputpesquisa{
            width:15%;
            margin-right: 5%;

            input{
                width:90%;
            }
            margin-right:10px;
        }
    }
`;

