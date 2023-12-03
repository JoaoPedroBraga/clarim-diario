import  Noticia  from '../../../components/Noticias/index.jsx';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      {noticias.map(noticia => 
      <Noticia key={noticia.id} noticia={noticia}/>
      )}
    </div>
  )
}

export default HomePage