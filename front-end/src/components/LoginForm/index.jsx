'use client';

import { useState } from "react";

const LoginForm = () => {
    const [form, setForm] = useState({
        email: '',
        senha: '',
    })
    const aoSubmeter = (e) => {
        e.preventDefault();
        console.log('submeteu', form);
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