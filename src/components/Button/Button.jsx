import './Button.css'

export default function Button({children, isActive, ...props}){
    // function handleClick(){
    //     console.log("button clicked")
    // }
    // const handleMouseEnter = () => console.log('enter')
    return(
        
        <button {...props} className ={isActive ? 'button focus' : 'button'}>
            {children}
        </button>
    )
}