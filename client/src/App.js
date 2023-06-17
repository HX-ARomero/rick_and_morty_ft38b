import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/about/About.jsx";
import Cards from './components/cards/Cards.jsx';
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Introduction from './components/introduction/Introduction';
import Nav from './components/nav/Nav.jsx';
import Spinner from './components/spinner/Spinner';
import Favorites from './components/favorites/Favorites';


function App() {
   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   const navigate = useNavigate();

   // http://localhost:3001/rickandmorty/login/?email=ejemplo@gmail.com&password=123456
   // { access: true || false }
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { access } = (await axios(URL + `?email=${email}&password=${password}`)).data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/');
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);

   const onSearch = async id => {
      try {
         // Evitar duplicados:
         const characterId = characters.filter(character => character.id === id);
         // console.log(characterId);
         if(characterId.length) return alert("The character already exists!!!");
         if(id < 1 || id > 826 ) return alert("There is no character with the entered id!!!");
         const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         console.log(error.message);
      }
   }

   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== id))
   }

   const location = useLocation();
   // console.log(location);

   return (
      <div className='App'>
         {
            location.pathname !== "/"
            ? <Nav onSearch={onSearch}/>
            : null
         }
         <Routes>
            <Route exact path="/" element={<Form login={login} />} />
            <Route exact path="/introduction" element={<Introduction />} />
            <Route path="/home" element=
               {
                  characters.length
                     ? <Cards characters={characters} onClose={onClose} numberOfCards={characters.length} />
                     : <Spinner />
               }
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites onClose={onClose} />} />
            {/* <Route path="*" element={<NotFound />} /> */}
         </Routes>
         
      </div>
   );
}

export default App;
