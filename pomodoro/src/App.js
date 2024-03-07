import React, { useState, useEffect } from 'react'; // Importa useState y useEffect desde React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Todo from './Components/Todo';
import Register from '../src/Components/Register';

function App() {
  const [imageUrl, setImageUrl] = useState(''); // Define la variable imageUrl y su función setter setImageUrl

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos/random?query=space&client_id=16nDuBPIZgY7w3RMazFjfe1u8eX4rwPjezxL91jtlGw');
        const data = await response.json();
        setImageUrl(data.urls.regular); // Actualiza la variable imageUrl con la URL de la imagen obtenida de la API de Unsplash
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);
    
  return (
    <div style={{backgroundImage: `url(${imageUrl}&w=1920)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/#" element={<Todo />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


