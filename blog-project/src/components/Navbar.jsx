import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
//import { useAuthentication } from '../../hooks/useAuthentication';
import {useAuthValue} from '../context/AuthContext';
import style from './Navbar.module.css';
import { useAuthentication } from '../hooks/useAuthentication';


const Navbar = () => {
  const {user} = useAuthValue();
  const {logout} = useAuthentication();
  return (
    <nav className={style.navbar}>
      <NavLink to="/">
        First <del>Blog</del>
      </NavLink>
      <ul className={style.links_list}>
        <li>
          <NavLink to='/' className={({isActive}) => (isActive ? style.active : "")}>
            Inicio
          </NavLink>       
        </li>
        {!user &&(
          <>
          <li>
            <NavLink to='/login' className={({isActive}) => (isActive ? style.active : "")}>
              Login 
            </NavLink>
          </li>
          <li>
            <NavLink to='/register' className={({isActive}) => (isActive ? style.active : "")}>
              Cadastro 
            </NavLink>
          </li>
          </>
        )}
        {user &&(
          <>
          <li>
            <NavLink to='/dashboard' className={({isActive}) => (isActive ? style.active : "")}>
              Dashboard 
            </NavLink>
          </li>
          <li>
            <NavLink to='/post/create' className={({isActive}) => (isActive ? style.active : "")}>
              Novo post
            </NavLink>
          </li>
          </>
        )}
        <li>
        <NavLink to='/about' className={({isActive}) => (isActive ? style.active : "")}>
            Sobre 
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar