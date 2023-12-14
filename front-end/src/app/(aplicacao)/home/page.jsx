'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import  Noticia  from '../../../components/Noticias/index.jsx';
import LateralEsquerdo from '@/components/LateralEsquerdo/index.jsx';
import LateralDireito from '@/components/LateralDireito/index.jsx';

import './style.css';

const HomePage = () => {
  const [noticias, setNoticias] = useState([]);

  const getNoticias = async () => {
    try {
      const result = await axios.get('http://localhost:8080/noticias');
      setNoticias(result.data);
    }catch(erro){
      alert(erro.response.data.message);
    }
  }

  const getNoticiasPopular = () => { 
    if(noticias){
      return noticias.find(noticia => noticia.isPopular);
    }
  }

  const getNoticiasUltima = () => { 
    if(noticias){
      return noticias.filter(noticia => noticia.isUltima);
    }
  }

  useEffect(() => {
    getNoticias()
  }, []);

  return (
    <div className='grid-home'>
      {getNoticiasPopular() && <LateralEsquerdo noticia={getNoticiasPopular()}/>}
      <div>
        {noticias.map(noticia => 
          <Noticia key={noticia.id} noticia={noticia}/>
        )}
      </div>
      {getNoticiasUltima() && <LateralDireito noticias={getNoticiasUltima()}/>}
    </div>
  )
}

export default HomePage