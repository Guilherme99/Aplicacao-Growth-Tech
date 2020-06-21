import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    font-size:30px;
    font-weight:bold;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background: rgb(155,125,204);
    padding:1% 1% 1% 2%;

    a{
        text-decoration:none;
        font-size:14px;
        right:5%;
        justify-content:right;
        padding: 8px 16px;
        background: #fff;
        border-radius: 5px;
        
    }
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items:center;

    h1{
        font-size: 20px;
        margin-top: 10px;

    }
    p{
        font-size: 14px;
        margin-top: 5px;
        color: #666;
        line-height:1.4;
        text-align:center;
        max-width:400px;
    }
`;

export const IssueList = styled.ul`
    width:80%;
    margin:auto;
    margin-top:30px;
    margin-bottom:30px;
    border: 1px solid #eee;
    list-style:none;
    z-index: 9;
    background: #fff;
    font-family: 'Courier New', Courier, monospace;
    font-size:10px;
    border-radius:10px;
    
    li{
        display:flex;
        padding:1%;
        border-radius: 4px;
        margin: 10px;
        
    
    & + li{
        border-top: 1px solid #cecece;
        
    }
    &:hover {
        background: rgb(155,125,204);
        color: #fff;

        &:hover div p {
            color:#fff;
        }
    }

    img{
        width:36px;
        height:36px;
        border-radius:50%;
        border:2px solid #eee;
    }

    div{
        flex:1;

        strong{
            font-size:16px;
            margin-left: 10px;

            h4{
                text-align:center;
            }
        }
        p{
            margin-left: 10px;
            margin-top: 5px;
            font-size: 12px;
            color: #999;

        }

    }
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
        .inputpesquisa{
            width:50%;
            margin-right: 10%;

            input{
                width:100%;
                font-size:10px;
            }
        }
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

export const PaginationPosts = styled.div` 
    width:80%;
    margin:auto;
    list-style:none;
    z-index: 9;
    font-family: 'Courier New', Courier, monospace;
    font-size:10px;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    align-items:center;
    justify-content:center;
    border-radius:10px;
`;