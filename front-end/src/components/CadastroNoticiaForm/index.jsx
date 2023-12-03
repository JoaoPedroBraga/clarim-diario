'use cliente'

import { useState } from "react"

const CadastroNoticiaForm = () => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [texto, setTexto] = useState('');

    const aoSubmeter = (e) => {
        e.preventDefault();
        console.log('Submeteu', title, img, texto);
    }
    const aoAlterarValores = (e) => {
        const {name, value} = e.target;
        if (name === 'title') {
            setTitle(value);
        }

        if (name === 'img') {
            setImg(value);
        }

        if (name === 'texto') {
            setTexto(value);
        }
    };
  return (
    <form onSubmit={aoSubmeter}>
        <div>
            <label htmlFor="titulo">Título</label>
            <input type="text" name="title" onChange={aoAlterarValores}/>
        </div>
        <div>
            <label htmlFor="img">Imagem</label>
            <input type="text" name="img" onChange={aoAlterarValores}/>
        </div>
        <div>
            <label htmlFor="texto">Texto</label>
            <input type="text" name="texto" onChange={aoAlterarValores}/>
        </div>

        <button type="submit">Criar Noticia</button>    

    </form>
  )
}

export default CadastroNoticiaForm