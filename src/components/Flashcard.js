import { useState } from "react"
import styled from "styled-components"
import cards from "./cards"
import Logo from './Logo'
import MotrarFlashcard from "./MostrarFlashcard"
import Rodape from './Rodape'
import play from '../assets/img/seta_play.png'

export default function Flashcard () {
    const [perguntas, setPerguntas] =useState([])
    const [respondidas, setRespondidas] =useState([])
    const [clicado, setClicado] = useState(false)
    const [zap, setZap] =  useState(true)
    const [viradas, setViradas] =  useState([])
    console.log(cards) 
    console.log(perguntas) 
    console.log(respondidas) 

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
                            flash={card.flash}
                            answer={card.answer} 
                            number={card.number}
                            respondidas={respondidas} 
                            setRespondidas={setRespondidas}
                            perguntas={perguntas}
                            setPerguntas={setPerguntas}
                            clicado={clicado}
                            setClicado={setClicado}
                            zap={zap}
                            setZap={setZap}
                            viradas={viradas}
                            setViradas={setViradas}
                            /> 
                        : 
                        <PerguntaFechada                            
                            number={card.number} 
                            onClick={() => recebe(card.question)}>
                            <p>Pergunta {card.number}</p>
                            <img src={play}/>

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
    cursor: pointer;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }`

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