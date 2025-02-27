import { Link } from 'react-router-dom'
import './homepage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital' />
      <div className="left">
        <h1>XENOS V2.0</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam itaque iure numquam vel, sint tempore consequuntur.</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage