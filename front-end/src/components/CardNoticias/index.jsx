'use client'

const CardNoticia = ({noticia}) => {
    return(
        <div>
            <h2>{noticia.title}</h2>
            <img src={noticia.img} alt={noticia.title} />
            <p dangerouslySetInnerHTML={{__html: noticia.texto}}/>
        </div>

    )
}

export default CardNoticia