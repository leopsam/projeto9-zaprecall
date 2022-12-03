import styled from "styled-components"
import virar from '../assets/seta_virar.png'
import VirarFlashcard from "./ViraFlashcard"

export default function MotrarFlashcard (props) {
    const {number, question, answer, respondidas, setRespondidas, viradas, setViradas} = props
    
    function resposta(number){
        if(!viradas.includes(number)){
            let arrayViradas = [...viradas, number]
            setViradas(arrayViradas)
            console.log(arrayViradas)
        }
    }

    return(  
        (!viradas.includes(number)) ?    
            <PerguntaAberta>
                    <p data-test="flashcard-text">{question}</p>
                    <img data-test="turn-btn"src={virar}  onClick={() => resposta(number)}/>
            </PerguntaAberta>
            :
            <VirarFlashcard 
                number={number}
                answer={answer}
                respondidas={respondidas} 
                setRespondidas={setRespondidas}
                />
    )
}

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }`