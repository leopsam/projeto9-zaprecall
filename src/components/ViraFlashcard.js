import { useState } from "react"
import styled from "styled-components"
import certo from '../assets/icone_certo.png'
import erro from '../assets/icone_erro.png'
import quaseLa from '../assets/icone_quase.png'

export default function VirarFlashcard (props) { 
    const {number, answer, respondidas, setRespondidas} = props
    const verde = "#2FBE34"
    const amarelo = "#FF922E"
    const vermelho = "#FF3030"
    const [incoreto, setIncoreto] = useState([])
    const [quase, setQuase] = useState([])
  
    function resposta(status){ 
        let novoArray = [...respondidas, answer]
        setRespondidas(novoArray)
        console.log(status)

        if(status == 'incoreto'){
            let arrayIncoreto = [...incoreto, number]
            setIncoreto(arrayIncoreto)
            console.log(incoreto)
            console.log(number)
            console.log(arrayIncoreto.includes(number))
        }else  if(status == 'quase'){
            let arrayQuase = [...quase, number]
            setQuase(arrayQuase)
            console.log(quase)
            console.log(number)
            console.log(arrayQuase.includes(number))
        }        
    }  

    return( 

       (!respondidas.includes(answer)) ?
        <PerguntaAberta>
            <p data-test="flashcard-text">{answer}</p> 
                <ContainerBotoes>
                    <Botoes data-test="no-btn" cor={vermelho} onClick={() => resposta('incoreto')}>Não lembrei</Botoes> 
                    <Botoes data-test="parcial-btn"cor={amarelo} onClick={() => resposta('quase')}>Quase não lembrei</Botoes>  
                    <Botoes data-test="zap-btn"cor={verde} onClick={() => resposta('correto')}>Zap!</Botoes>
                </ContainerBotoes>                
        </PerguntaAberta>
        :
        <PerguntaFechada cor={incoreto.includes(number) ? vermelho : quase.includes(number) ? amarelo : verde}>           
                <p data-test="flashcard-text">Pergunta {number}</p>
                <img src={incoreto.includes(number) ? erro : quase.includes(number) ? quaseLa : certo}                 
                data-test={incoreto.includes(number) ? 'no-icon' : quase.includes(number) ? 'parcial-icon' : 'zap-icon'}/>             
        </PerguntaFechada>
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
    }`

const Botoes = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.cor};
    border-radius: 5px;
    border: 1px solid ${props => props.cor};
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    
`

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
        color: ${props => props.cor};
        text-decoration: line-through;
    }`