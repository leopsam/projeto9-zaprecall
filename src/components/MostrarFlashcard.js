import styled from "styled-components"
import virar from '../assets/img/seta_virar.png'
import VirarFlashcard from "./ViraFlashcard"

export default function MotrarFlashcard (props) {
    const {number, question, flash, answer, respondidas, setRespondidas, viradas, setViradas, clicado, setClicado, zap, setZap, perguntas,setPerguntas} = props
    
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
                    <p>{question}</p>
                    <img src={virar}  onClick={() => resposta(number)}/>
            </PerguntaAberta>
            :
            <VirarFlashcard 
                number={number}
                answer={answer}
                flash={flash} 
                respondidas={respondidas} 
                setRespondidas={setRespondidas}
                zap={zap}
                setZap={setZap}
                setClicado={setClicado}/>
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