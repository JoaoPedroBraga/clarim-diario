const CardNoticia = ({noticia}) => {
    return(
        <div>
            <h2>{noticia.title}</h2>
            <img src={noticia.img} alt={noticia.title} />
            <p>{noticia.texto}</p>
        </div>

    )
}

export default CardNoticia