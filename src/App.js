//import './styles.css';
import React, { useState } from 'react';
import './App.css';
import Header from './Components/ToDo_List/Header';
import Form from './Components/ToDo_List/Form';
import Todolist from './Components/ToDo_List/Todolist';

//import Home from "./pages/Home"
//import About from "./pages/About"
//import Contact from "./pages/Contact"
//import Biodata from '.sa/Components/Biodata/Biodata';
//import About from './Components/About/About';
//import Hero from './Components/Hero/Hero';
//import Navbar from './Components/Navbar/Navbar';
//import HandlingEvent from './Components/HandlingEvent';
//import Navbar from './Navbar';
//import {Route, Routes} from "react-router-dom"


const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // No need for curly braces here.

    const newTodo = {
      id: Date.now(),
      title: input,
      completed: false,
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInput(""); 
  };

  console.log(todos);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <Form input={input} setInput={setInput} addTodo={addTodo} />
        <Todolist todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};


// function App() {
//   return (
//     <div className="App">
//       <>
//       <Header/>
//       <Todo/>
        {/* <Navbar/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div> */}
      // </>
      {/* <Biodata/> */}
      {/* <About nickname="CJ"/> */}
      {/* <Hero name ="Cyriz Jealo" lastname ="Bonsol">
        <h1> This is my child</h1>
      </Hero> */}
      {/* <Navbar /> */}
      {/* <HandlingEvent/>  */}
//     </div>
//   );
// }

export default App;
