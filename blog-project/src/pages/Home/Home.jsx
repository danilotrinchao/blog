import {useState} from 'react'
import style from './Home.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import PostDetail from '../../components/PostDetail';

const Home = () => {
  const[query, setQuery] = useState("")
  const {documents: posts, loading} = useFetchDocument("posts");
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
          {loading && <p>   Carregando...</p>}
          {posts && posts.map((post) => <PostDetail key ={post.id} post={post}/>)}
          {posts && posts.length === 0 && (
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