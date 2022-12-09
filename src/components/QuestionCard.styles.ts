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
            }
        }
    }
`