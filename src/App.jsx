import Form from "./components/form/Form"
// import Imput from "./components/imputs/Imput"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  

  return (
    <>
      <Router>
        <Routes>
        
          <Route path = "/" element = {<Form/>} />

        </Routes>
      </Router>
      
    </>
  )
}

export default App
