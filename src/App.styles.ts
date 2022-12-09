import styled, { createGlobalStyle } from 'styled-components'
import bgImage from './images/korpa.jpg'

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
    body{
        background-image: url(${bgImage});
        background-size: cover;
        margin:0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    *{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p{
        color: #fff;
    }

    .score{
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
    }

    h1{
        background-image: linear-gradient(180deg, #fff, #ff91ba);
        background-size: 100%;
        background-clip: text;  // <- la magia
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color:transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }
    
    .spinner{
        margin-top: 3rem;
    }

    button{
        padding: 1rem;
        border: 0;
        cursor: pointer;
        transition: transform .3s;
        
        &.next{
            border: 1px solid white;
            background-color: transparent;
            color: #fff;
            font-weight: 600;
            margin-top: 1.5rem;
            &:hover{
                transform: rotate(-5deg);
            }
        }
        &.start{
            border: 1px solid white;
            background-color: transparent;
            color: white;
            font-weight: 600;
            font-size: 2rem;
            transition: filter .2s, transform .3s;
            &:hover{
                filter: drop-shadow(2px 2px #222);
                transform: scale(1.05);
            }
        }
    }
`