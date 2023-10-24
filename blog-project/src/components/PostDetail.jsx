/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import style from './PostDetail.module.css'

const PostDetail = ({post}) => {
  return (
    <div className={style.postDetail}>
        <img src={post.image} alt={post.title}/>
        <h2>{post.title}</h2>     
        <p className={style.createdBy}>{post.createdBy}</p>
        <div className={style.tags}>
            {post.tagsArray.map((tag) =>{
                <p  key={tag}>
                    <span>#</span> {tag} 
                </p>
            })}
            <input type='text' value={post.body}/>
        </div>
        <Link to={'/post/${post.id}'} className='btn btn-outline'>Ler</Link>
    </div>
  )
}

export default PostDetail