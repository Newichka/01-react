import { useState, useRef } from "react"
import Button from "./Button/Button.jsx"


function StateVsRef(){
    const input = useRef()
    const[show, setShow] = useState(false)
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            setShow(true)
        }
        
    }


    return(
    <div>
        <h3>input value: {show && input.current.value}</h3>
        <input ref={input} type="text" onKeyDown={handleKeyDown} className="control" />
    </div>
    )
}

export default function FeedBackSection(){
    const [form, setForm] = useState({
        name:'',
        hasError: true,
        reason: 'help'
    })

    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('help')
    // const [hasError, setHasError] = useState(true)

    function handleNameChange(event){
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm((prev) => ({...prev, 
            name: event.target.value,
            hasError: event.target.value.trim().lenght === 0,
        }))
        // setForm({
        //     name: event.target.value,
        //     hasError: event.target.value.trim().lenght === 0,
        //     reason: form.reason,
        // })
    }



    return(
        <section>
            <h3>Обратная связь</h3>


            <form>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" className="control" value={form.name} onChange={handleNameChange}
                style={{border: form.hasError ? '1px solid red' : null}}></input>


                <label htmlFor="reason">Причина тряски </label>
                <select id="reason" className="control" value={form.reason} 
                onChange={(event) => setForm((prev)=>({...prev, reason: event.target.value}))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>

                
            </form>

            <StateVsRef />
        </section>
    )
}