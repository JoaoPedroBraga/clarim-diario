'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

import GridNoticias from '../../../../components/GridNoticias/index.jsx';

// const noticias = [
//     {
//       id: 1,
//       title: 'Noticia 1',
//       img: 'https://via.placeholder.com/150',
//       texto: 'Texto da <b>Noticia 1</b',
//     },
//     {
//       id: 2,
//       title: 'Noticia 2',
//       img: 'https://via.placeholder.com/150',
//       texto: 'Texto da <b>Noticia 2</b',
//     },
//     {
//       id: 3,
//       title: 'Noticia 3',
//       img: 'https://via.placeholder.com/150',
//       texto: 'Texto da <b>Noticia 3</b',
//     }
// ]

const NoticiasPage = ({ params, query }) => {
  const [noticias, setNoticias] = useState([]);

  const getNoticias = async () => {
    try{
      const result = await axios.post(`http://localhost:8080/noticias?categorias=${params.categorias}`);
      setNoticias(result.data);
    }catch(error){  
      alert(error.response.data.message);
    }
  }

  useEffect(() => {
    getNoticias();
  }, []);


  return (
    <div>
      <h1>{params.categoria.toUpperCase()}</h1>
        <GridNoticias noticias={noticias} />
    </div>
  )
}

export default NoticiasPage;