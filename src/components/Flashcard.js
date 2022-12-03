import { useState } from "react"
import styled from "styled-components"
import cards from "./cards"
import Logo from './Logo'
import MotrarFlashcard from "./MostrarFlashcard"
import Rodape from './Rodape'
import play from '../assets/seta_play.png'

export default function Flashcard () {
    const [perguntas, setPerguntas] =useState([])
    const [respondidas, setRespondidas] =useState([])
    const [viradas, setViradas] =  useState([])

    function recebe(question){
        let novovalor = [...perguntas, question]
        setPerguntas(novovalor)       
    }
    
    return( 
        <ScreenContainer>            
            <Logo />
                {cards.map((card) => (
                    <>
                        {perguntas.includes(card.question) ?
                        <MotrarFlashcard                             
                            question={card.question} 
                            answer={card.answer} 
                            number={card.number}
                            respondidas={respondidas} 
                            setRespondidas={setRespondidas}
                            viradas={viradas}
                            setViradas={setViradas}
                            /> 
                        : 
                        <PerguntaFechada 
                            data-test="flashcard"                           
                            number={card.number}>
                            <p data-test="flashcard-text">Pergunta {card.number}</p>
                            <img data-test="pay-btn" onClick={() => recebe(card.question)} src={play}/>

                        </PerguntaFechada>}
                    </>))}

            <Rodape respondidas={respondidas}/>           
        </ScreenContainer>
    )   
}


const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img{
        cursor: pointer;
    }
    `

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`