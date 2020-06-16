import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 40% 0 auto;
    text-align:center;
    padding: 10px;

    p{
        font-size: 20px;

        span{
            
            svg{
                animation: loading 0.4s infinite;
            }


            @keyframes loading {
                to{
                    transform: rotate(360deg);
                }
                
            }
        }
    }

    @media (min-width: 750px){
    	margin: 20% 0 auto;

    }
`;
