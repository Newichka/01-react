import './Button.css'

export default function Button({children, onClick, isActive}){
    // function handleClick(){
    //     console.log("button clicked")
    // }
    // const handleMouseEnter = () => console.log('enter')
    return(
        <button className ={isActive ? 'button focus' : 'button'} onClick={onClick}>
            {children}
        </button>
    )
}