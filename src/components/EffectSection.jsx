import { useEffect, useState, useCallback } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'



export default function EffectSection(){
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    function openModal(){
        setModal(true)
    }

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    },[])


    useEffect(()=>{
        fetchUsers()
    }, [fetchUsers])
    
    return(
        <section>
            <h3>Effects</h3>

            <Button style={{marginBottom: '1rem'}} onClick={openModal}>Открыть инфо</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid magni labore obcaecati consequatur culpa ea harum! Deleniti nobis porro ipsam magnam harum quod neque error omnis eos suscipit. Atque.</p>
                <Button onClick={()=>setModal(false)}>CLose modal</Button>
            </Modal>

            {loading && <p>Загрузка</p>}

            {!loading && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}> {user.name} </li>
                    ))}
                </ul>
            )} 
        </section>
    )
}