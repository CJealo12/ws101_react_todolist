import './App.css';
import './styles.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
//import Biodata from './Components/Biodata/Biodata';
//import About from './Components/About/About';
//import Hero from './Components/Hero/Hero';
//import Navbar from './Components/Navbar/Navbar';
//import HandlingEvent from './Components/HandlingEvent';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </>
      
      {/* <Biodata/> */}
      {/* <About nickname="CJ"/> */}
      {/* <Hero name ="Cyriz Jealo" lastname ="Bonsol">
        <h1> This is my child</h1>
      </Hero> */}
      {/* <Navbar /> */}
      {/* <HandlingEvent/>  */}
    </div>
  );
}

export default App;
