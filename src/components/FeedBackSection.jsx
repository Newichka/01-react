import { useState } from "react"
import Button from "./Button/Button.jsx"



export default function FeedBackSection(){

    const [name, setName] = useState('')
    const [reason, setReason] = useState('help')
    const [hasError, setHasError] = useState(false)

    function handleNameChange(event){
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }


    return(
        <section>
            <h3>Обратная связь</h3>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" className="control" value={name} onChange={handleNameChange}
                style={{border: hasError ? '1px solid red' : null}}></input>


                <label htmlFor="reason">Причина тряски </label>
                <select id="reason" className="control" value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={hasError}>Отправить</Button>
            </form>
        </section>
    )
}