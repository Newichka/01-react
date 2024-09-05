import Button from "./Button/Button.jsx"
import { differences } from "../data.js"
import { useState } from "react"


export default function ButtonSection(){

    const [contentType, setContentType] = useState(null)
  
    function handleClick(type){
      setContentType(type)
    }
    // let tabContent = null
    // if(contentType){
    //   tabContent = <p>{differences[contentType]}</p>
    // } else {tabContent = <p>Ничего нет</p>}


    return(
        <section>
        <h3>Особенности</h3>
        <Button isActive={contentType === 'way'} onClick={() => setContentType('way')}>Привет</Button>
        <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Пока</Button>
        <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Бимбимбамбам</Button>

        {/* 1 способ */}
        {contentType ? (<p>{differences[contentType]}</p>) : (<p>ЖМИ КНОПКУ</p>) }

        {/* 2 способ */}
        {/* {!contentType ? <p>Нажми на кнопку</p> : null}
        {contentType ? <p>{differences[contentType]}</p> : null} */}


        {/* 3 способ */}
        {/* {!contentType && <p>Нажмииииии</p>}
        {contentType && <p>{differences[contentType]}</p>} */}


        {/* 4 способ */}
        {/* {tabContent} */}

        
      </section>
    )
}