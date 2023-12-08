'use client'

const Noticia = (props) => {
  return (
    <div>
        <div>{props.noticia.title}</div>
        <img src={props.noticias.img} alt={props.noticias.title} />
        <div dangerouslySetInnerHTML={{__html: props.noticias.texto}}/>
    </div>
  )
}

export default Noticia