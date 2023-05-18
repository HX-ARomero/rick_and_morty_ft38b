import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from "./components/about/About.jsx";
import Cards from './components/cards/Cards.jsx';
import Detail from "./components/detail/Detail.jsx";
import Nav from './components/nav/Nav';


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = id => { // 2 => { id: 2 }
      axios (`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            // console.log(data);
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <hr />
         <Routes>
            <Route path="/home" element={
               <Cards characters={characters} onClose={onClose} />
            }/>
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
         
      </div>
   );
}

export default App;
