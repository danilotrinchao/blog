import style from './About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={style.about}>
      <h2>Sobre o First <span>Blog</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In vel fringilla urna. Praesent sodales efficitur dolor, ac tristique ipsum egestas ac.
          Donec molestie faucibus tortor, a facilisis dolor ultrices vel. Duis sed pretium ex, quis interdum leo.
          Donec ac turpis fringilla, posuere quam at, facilisis tortor. 
          Donec sit amet ullamcorper leo. Proin ut ante eleifend, porta felis quis, finibus tellus.
          Etiam sodales justo sit amet nisi semper hendrerit. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus. 
          Quisque laoreet ligula nulla, et volutpat mi dictum nec.
      </p>
    <Link to='/post/create' className='btn'>
      Criar post
      </Link>
    </div>
  )
}

export default About