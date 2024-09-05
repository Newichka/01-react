import React from "react"




// export default function IntroSection(){
//     return(
//         <section>
//             <h1 className="centered">Главный текст</h1>
//             <h3 className="centered" style={{color: '#666'}}>Главный текст поменьше</h3>
//         </section>
//     )
// }

const e = React.createElement

export default function IntroSection(){
    return(
        e('section',null, 
            [e('h1', {className:"centered", key:1},'Главный текст'),
            e('h3',{className:"centered", style:{color:'#666'}, key:2},'Главный текст поменьше')
            ])
    )
}