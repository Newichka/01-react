import Header from "./components/Header"
import Section from "./components/Section.jsx"
import ButtonSection from "./components/ButtonSection.jsx"
import { Fragment, useState } from "react"
import IntroSection from "./components/IntroSection.jsx"
import TabsSection from "./components/TabsSection.jsx"
import FeedBackSection from "./components/FeedBackSection.jsx"
import ApiData from "./components/ApiData.jsx"
import '../src/index.css'

export default function App() {

  const [tab, setTab] = useState('main')


  return (
    <Fragment>
      <Header />
      
      <container>
      <main className="container">
        <IntroSection/>
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>
        
        {tab === 'main' && (
          <div>
             <Section/> 
             <ButtonSection/> 
            <ApiData/>
          </div>
        )}

        {tab === 'feedback' &&(
          <>
            <FeedBackSection/>
            
          </>
        )}

        
      </main>
      </container>
    </Fragment>
  )
}
// хуки теория, формы - посмотреть 