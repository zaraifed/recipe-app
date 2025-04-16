import { useNavigate } from 'react-router-dom'
import pudding from '../assets/pudding.gif'


function Home() {
    const navigate = useNavigate()

    return (
        <div className='home'>
            <h1>Let's cook!</h1>
            <img id='pudding' src={pudding} alt="Pudding" />
            <button onClick={() => navigate('/recipe')}>Vanilla Cake</button>
        </div>
    )
}

export default Home