/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import style from './Register.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';
import { db } from '../../firebase/config';


const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const {auth, createUser, error: authError, loading} = useAuthentication()

const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const user = {
        displayName,
        email,
        password
    }

    if(password !== confirmPassword){
        setError("Sua senha deve ser a mesma no campo de confirmação!")
        return
    }

    const res = await createUser(user);
    console.log(res);
};

useEffect(() => {
    if(authError)
        setError(authError)
}, [authError])

  return (
    <div className={style.register}>
        <h1>Cadastre-se e comece a postar</h1>
        <p>Crie sua conta e compartilhe momentos!</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input
                    type='text'
                    name='displayName'
                    required
                    placeholder='Nome de usuário'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>
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
            <label>
                <span>Confirmação de Senha:</span>
                <input
                    type='text'
                    name='confirmPassword'
                    required
                    placeholder='Confirme sua senha'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
             <button className='btn'> Cadastrar</button> 
            {!loading && (
                <button className='btn' disabled> Aguarde...</button>
            )}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register