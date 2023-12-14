'use client'

import CardNoticia from "../CardNoticias";

import './style.css'

function truncateWithEllipses(text, max) 
{
    return text.substr(0,max-1)+(text.length>max?'&hellip;':''); 
}

export const LateralDireito = ({ noticias }) => {

    const noticiasComElipse = () => {
        return noticias.map((noticia, index) => {
            noticia.texto = truncateWithEllipses(noticia.texto, 111);
            return (
                <div style={{marginBottom:'20px'}}>
                    <CardNoticia key={index} noticia={ noticia } />
                </div>
            )
        })
    }

    return(
        <div className="ultimas-noticias">
            <div className="titulo">Mais Popular</div>
            <div style={{ marginBottom:'25px '}}>
                { noticias.length && noticiasComElipse()}
            </div>
        </div>
    )
}

export default LateralDireito;