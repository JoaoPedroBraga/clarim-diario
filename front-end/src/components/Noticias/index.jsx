'use client'

const Noticia = (props) => {
  return (
    <div>
        <div>{props.noticia.title}</div>
        <img src={props.noticia.img} alt={props.noticia.title} />
        <div dangerouslySetInnerHTML={{__html: props.noticia.texto}}/>
    </div>
  )
}

export default Noticia