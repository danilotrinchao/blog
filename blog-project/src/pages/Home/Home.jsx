import {useState} from 'react'
import style from './Home.module.css';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const[query, setQuery] = useState("")
  const [posts] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={style.home}>
        <h1>Veja os posts mais recentes!</h1>
        <form onSubmit={handleSubmit} className={style.seachForm}>
            <input type='text' placeholder='Ou busque por tags' onChange={(e) => setQuery(e.target.value)}/>
            <button className="btn btn-dark">Pesquisar</button>
        </form>
        <div>
          <h1>Posts...</h1>
          {!posts && posts.length === 0 && (
            <div className={style.noposts}>
               <p> Não foram encontrados posts.</p>
               <Link to='/post/create' className='btn'>Criar primeiro post</Link>
            </div>
          )}
          
        </div>
    </div>
  )
}

export default Home