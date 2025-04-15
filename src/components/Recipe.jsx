import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from './Timer'
import house from '../assets/house.png'

function Recipe() {
    const navigate = useNavigate()

    const [checked, setChecked] = useState(Array(7).fill(false))
    const ingredients = ["1 egg", "3 tbsp milk", "1 tbsp oil", "4 tbsp granulated sugar",
    "Pinch of salt", "Dash of vanilla extract", "1/4 cup + 2 tbsp self-raising flour"]

    const toggleCheck = (index) => {
        const updated = [...checked] // copies contents of array into the new updated array
        updated[index] = !updated[index] // toggles the checked state of the ingredient
        setChecked(updated) // updates the checked state of the ingredient

    }

    return (
        <div className='recipe'>
            <button id='back-button' onClick={() => navigate('/')}>
                <img id='back' src={house} alt="House" />
            </button>
            <h2>Vanilla Cake</h2>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={checked[index]} onChange={() => toggleCheck(index)} />
                        {item}
                    </li>
                ))}
            </ul>
            <ol>
            <li>Preheat oven to 180°C</li>
            <li>Mix egg, sugar, salt, milk & oil</li>
            <li>Add flour and mix</li>
            <li>Bake for 20 mins</li>
            <li>Let cool and enjoy!</li>
            </ol>
            <Timer initialTime={20 * 60} />
        </div>

    )
}

export default Recipe