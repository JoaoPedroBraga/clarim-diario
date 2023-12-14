'use client'
import CardNoticia from "../CardNoticias";

import './style.css'

function truncateWithEllipses(text, max) 
{
    return text.substr(0,max-1)+(text.length>max?'&hellip;':''); 
}

export const LateralEsquerdo = ({ noticia }) => {

    noticia.texto = truncateWithEllipses(noticia.texto, 111)
    return(
        <div className="mais-popular">
            <div className="titulo">Mais Popular</div>
            <CardNoticia noticia={ noticia } temHover={true} />
        </div>
    )
}

export default LateralEsquerdo;