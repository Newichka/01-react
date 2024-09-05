import { ways } from "../data"
import WayToTeach from "./WayToTeach"



export default function Section(){

  

    return(
        <section>
        <h3>Общая информация</h3>
        <ul>
          {/* Классный и удобный способ )))) */}
          {ways.map(way => <WayToTeach key={way.title} {... way}/>)}

          {/* Неудобный способ (((( */}
          {/* <WayToTeach 
            title={ways[0].title}
            description={ways[0].description} 
          />
          <WayToTeach {... ways[1]}/>
          <WayToTeach {... ways[2]}/>
          <WayToTeach {... ways[3]}/> */}

          
        </ul>
      </section>
    )
}