import {useState} from 'react'
import style from './CreatePost.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");
  const {insertDocument, response} = useInsertDocument("posts");
  const {user} = useAuthValue();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormError("")

    //valida url da imagem
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa está em uma URL;");
    }
    //cria array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());  
    //checar todos os valores
    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos.")
    }

    if(formError) return;
    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
  });

  //redirect para página inicial
  navigate("/");
  }
  return (
    <div className={style.createPost}>
        <h2>Criar post</h2>
        <form onSubmit={handleSubmit}>
            <label>
              <span>Título :</span>
              <input 
              type='text'
              name='title'
              required
              placeholder='Escolha um bom título...'
              onChange={(e) => setTitle(e.target.value)}
              value={title}/>             
            </label>
            <label>
              <span>URL da imagem :</span>
              <input 
              type='text'
              name='image'
              required
              placeholder='Insira uma imagem'
              onChange={(e) => setImage(e.target.value)}
              value={image}/>
            </label>
            <label>
              <span>Conteúdo :</span>
              <input 
              type='text'
              name='body'
              required
              placeholder='Insira uma legenda'
              onChange={(e) => setBody(e.target.value)}
              value={body}/>
            </label>
            <label>
              <span>Tags:</span>
              <input 
              type='text'
              name='tags'
              required
              placeholder='Insira hashtags'
              onChange={(e) => setTags(e.target.value)}
              value={tags }/>
            </label>
            {!response.loading && <button className='btn'> Postar</button>} 
            {response.loading && (
                <button className='btn' disabled> Aguarde...</button>
            )}
            {response.error && <p className='error'>{response.error}</p>}
        </form>
    </div>
  )
}

export default CreatePost