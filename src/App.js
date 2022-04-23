import "./App.scss"
import { Data } from "./components/Data"
import Header from "./components/Header"
import Second from "./components/Second"
import Section from "./components/Section"

function App() {
  return (
    <div className='App'>
      <Header />
      <Section slides={Data} />
      <Second />
    </div>
  )
}

export default App
