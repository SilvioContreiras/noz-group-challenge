import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
   
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 30px 0;
        width: 275px;

        h2 {
            margin-bottom: 24px;
            display: flex;
            justify-content: center;
        }

        input {
           background: #232129;
           color: #fff;
           border-radius: 10px;
           border: 2px solid #232129; 
           padding: 12px;
           width: 100%;

           & + input {
               margin-top: 10px;
           }


           &::placeholder {
             color: #666366;
           }

           &:focus {
               outline: none;
           }
        }

        button {
           font-weight: 500;
           color: #312e38;
           background: #ff9000;
           border-radius: 10px;
           border: 0; 
           padding: 0 16px;
           width: 100%;
           height: 45px;
           transition: background-color 0.22s;
           margin-top: 16px;

           &:hover {
            background: ${shade(0.25, '#ff9000')}
           }

           &:focus {
            outline: none;
        }

        }

        a {
            display: block;
            margin-top: 24px;
            text-decoration: none;
            text-align: center;
            color: #fff;
            transition: color 0.22s

            &:hover {
               color: ${shade(0.2, '#fff')}; 
            }
        }
    }

    > a {
        display: block;
        margin-top: 24px;
        text-decoration: none;
        text-align: center;
        color: #ff9000;
        transition: color 0.22s

        display: flex;
        align-items: center;

        &:hover {
            color: ${shade(0.2, '#ff9000')}; 
        }

        svg {
            margin-right: 16px;
        }
    }
`;
