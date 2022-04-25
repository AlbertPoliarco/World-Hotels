import "./App.scss"
import { Data } from "./components/Data"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Second from "./components/Second"
import Section from "./components/Section"

function App() {
  return (
    <div className='App'>
      <Header />
      <Section slides={Data} />
      <Second />
      <Footer />
    </div>
  )
}

export default App
