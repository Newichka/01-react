import Button from './Button/Button'
import Modal from './Modal/Modal'



export default function EffectSection(){
    const [modal, setModal] = useState(false)

    function openModal(){
        setModal(true)
    }
    
    return(
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Открыть инфо</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid magni labore obcaecati consequatur culpa ea harum! Deleniti nobis porro ipsam magnam harum quod neque error omnis eos suscipit. Atque.</p>
            </Modal>
        </section>
    )
}