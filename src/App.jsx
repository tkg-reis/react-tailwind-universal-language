import './App.css'
import { createContext, useEffect } from 'react'
import Sns from './components/Sns'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import LanguageProvider from './lib/languageData'
// import { LanguageData } from './lib/languageData'

// export const Languages = createContext(LanguageData);
// console.log(Languages);
// useEffect(() => {

// }[Languages])

function App() {
  
  return (
    <div className="App">
      <LanguageProvider>
        <Header/>
        <Sns/>
        <Main/>
        <Footer/>
      </LanguageProvider>
    </div>
  )
}

export default App
