import styled from "styled-components"
import cards from "./cards"

export default function ZapRecall ({respondidas}) {
    return(
        <FooterConcluidos data-test="footer">
            {respondidas.length}/{cards.length} CONCLUÍDOS
        </FooterConcluidos> 
    )
}

const FooterConcluidos = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`