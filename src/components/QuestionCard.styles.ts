import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p{
        color: #fff;
        span{
            font-weight: 600;
        }
    }

    h2{
        text-align: center;
        color: #fff;
        width: 70%;
    }

    .grid{
        display: grid;
        gap: .5rem;
        width: 70%;
        height: auto;
        grid-template-columns: 50% 50%;

        .option{
            text-align: center;

            button{
                width: 100%;
                height: max-content;
                border: none;
                cursor: pointer;
                transition: transform .4s, font-weight .3s;

                &:hover{
                    transform: scale(1.05);
                    font-weight: 600;
                }

                &:disabled{
                    background-color: #bbb;
                    color: gray;
                }
            }
        }

        .shake:active{
            animation: shake .5s;
        }

        .success:active{
            animation: success .5s;
            button{
                animation: colorChange .5s;
            }
        }
    }

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

@keyframes success {
25% {transform: scale(1.05)} 
50% {transform: scale(.9)}
85% {transform: scale(1)} 
}

@keyframes colorChange {
40% {background-color: #9ba}
}   
`