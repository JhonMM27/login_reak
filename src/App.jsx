import Form from "./components/form/Form"
// import Imput from "./components/imputs/Imput"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login/Login"
import Welcome from "./components/Welcome/Welcome"


function App() {
  

  return (
    <>
      <Router>
        <Routes>
        
          <Route path = "/" element = {<Form/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/welcome" element = {<Welcome/>} />

        </Routes>
      </Router>
      
    </>
  )
}

export default App
