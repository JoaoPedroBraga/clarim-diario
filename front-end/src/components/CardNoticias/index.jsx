'use client'

import { useState } from 'react'

import './style.css'

const CardNoticia = ({noticia, temHover = false}) => {
    const [hover, setHover] = useState(false);

    return(
        <div className='card-noticia'>
            <div style={{position:'relative'}}
            onMouseEnter={() => setHover(temHover ? true : false)} 
            onMouseLeave={() => setHover(false)}>
            <div className='hover' style={{opacity: hover ? '1' : '0'}}>Clique Aqui</div>
            <div className="imagem" style={{backgroundImage: `url(${noticia.img})`}} /></div>
 
            <h2>{noticia.title}</h2>
            <p dangerouslySetInnerHTML={{__html: noticia.texto}}/>
            <hr />
            <div className="publicado-em">{new Date(noticia.createdAt).toLocaleDateString('pt-BR')}</div>
        </div>

    )
}

export default CardNoticia