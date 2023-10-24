import {useState, useEffect} from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
import style from './Login.module.css';
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {login, error: authError, loading} = useAuthentication();

const handleSubmit = async (e) => {
  e.preventDefault()
  setError("")

  const user = {
      email,
      password
  }

  const res = await login(user);
  console.log(res);
};

useEffect(() => {
  if(authError)
      setError(authError)
}, [authError])

  return (
    <div className= {style.login}>
      <h1>Conecte-se e comece a postar!</h1>
        <form onSubmit={handleSubmit}>          
            <label>
                <span>Email:</span>
                <input
                    type='email'
                    name='email'
                    required
                    placeholder='Email do usuário'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>Senha:</span>
                <input
                    type='password'
                    name='password'
                    required
                    placeholder='Insira sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            
             <button className='btn'> Entrar </button> 
            {!loading && (
                <button className='btn' disabled> Aguarde...</button>
            )}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Login