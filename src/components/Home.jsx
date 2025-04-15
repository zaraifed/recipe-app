import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div className='home'>
            <h1>Let's cook!</h1>
            <img id='pudding' src="/recipe-app/src/assets/pudding.gif" />
            <button onClick={() => navigate('/recipe')}>Vanilla Cake</button>
        </div>
    )
}

export default Home