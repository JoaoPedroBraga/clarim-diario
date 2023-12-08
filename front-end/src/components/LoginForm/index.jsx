'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { useState } from "react";

const LoginForm = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        email: '',
        senha: '',
    })

    const aoSubmeter = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:8080/login', form);
            alert(result.data.message);
            router.push('/admin/noticias/criar')
        } catch (erro) {
            alert(erro.response.data.message);
        }
    }
    const aoAlterarValores = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]:value,
        })
    }

    return (
        <form onSubmit={aoSubmeter}>
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" onChange={aoAlterarValores}/>
        </div>
        <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha"  onChange={aoAlterarValores}/>
        </div>
        <button type="submit">Enviar</button>
    </form>
    )
}

export default LoginForm