import { useState, useEffect } from 'react'
import logo from '/logo-name.svg'

export default function Header(){
  const[now, setNow] = useState(new Date())


  useEffect(()=>{
    const interval = setInterval(() => setNow (new Date()), 1000)

    return()=>{
      clearInterval(interval)
    }
  }, [])

  return(
    <header>
      
      <img src={logo} alt='logo'/>
        {/* <h3>Пробная штучка</h3> */}
        <h3>Время сейчас: { now.toLocaleTimeString() }</h3>
      </header>
  )
}
  