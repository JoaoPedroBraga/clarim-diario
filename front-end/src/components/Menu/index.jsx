'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import './style.css'

const Menu = () => {
    const [menuLateral, setMenuLateral] = useState(false);
    const router = useRouter();
    return(
        <>
            <nav className='menu'>
                <button onClick={() =>setMenuLateral(!menuLateral)}>Menu</button>
                <div>Logo</div>
                <button onClick={() => router.push('/login')}>Login</button>
            </nav>
        
            { menuLateral &&
                <div className='menu-lateral'>
                    <div className='fechar' onClick={() =>setMenuLateral(!menuLateral)}> x </div>
                    <ul>
                        <li>Item 1</li>
                        <li>Item </li>
                        <li>Item 3</li>
                    </ul>
                </div>

            }
        </>
    )
        
}

export default Menu;