import './App.css'
import Sns from './components/Sns'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import LanguageProvider from './lib/LanguageData'
import { motion, useScroll } from "framer-motion";
// import { LanguageData } from './lib/languageData'

// export const Languages = createContext(LanguageData);
// console.log(Languages);
// useEffect(() => {

// }[Languages])

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
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
