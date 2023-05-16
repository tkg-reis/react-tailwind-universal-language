import './App.css'
import { createContext } from 'react'
import Sns from './components/Sns'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { LanguageData } from './lib/languageData'
export const Languages = createContext(LanguageData);

function App() {

  return (
    <div className="App">
      <Header
      />
      <Sns/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
