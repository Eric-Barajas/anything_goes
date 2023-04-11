import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './styling.css';

const Main = () => {

    const [ingredient, setIngredient] = useState(null)
    const [foodinfo, setFoodInfo] = useState(null)

    const handleSubmit = (e) => {
        console.log("test")
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
            params: {
                app_key: ' 32cdc5278ce72511dc88d514e264a929	',
                app_id: '9c77cb81',
                'nutrition-type': 'cooking',
                'health[0]': 'alcohol-free',
                ingr: ingredient,
                'category[0]': 'generic-foods'
            },
            headers: {
                'X-RapidAPI-Key': '3349990788msh388664143710c09p138db8jsn1f85a7af5681',
                'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data)
            setFoodInfo(response.data)
        }).catch(err => {
            console.log(err.response.status)
            if (err.response.status === 404) {
                console.log("Mission Failed");
            }
        })
    }

    console.log(foodinfo && foodinfo.parsed)

    return (
        <div className="app">
            <div>
                <form className="d-flex p-5" role="search" onSubmit={(e) => handleSubmit(e)}>
                    <input className="form-control me-2"
                        type="search"
                        placeholder="Type an ingredient"
                        aria-label="Search"
                        onChange={(e) => setIngredient(e.target.value)}
                        value={ingredient}
                    />
                    <input className="btn btn-outline-success" type="submit" />
                </form>
                <br /><br />
            </div>

            {(ingredient && foodinfo) && <div className="ingr-area">
                {/* <h3> {foodinfo.parsed.food.label}</h3> */}
                <div className='grid-container'>
                    {/* everytime you map will need a unique key */}
                    {foodinfo.parsed.map((parsed, foodIndex) => (
                        <div key={foodIndex}>
                            <img src={parsed.food.image} alt="Girl in a jacket"></img>
                            <h5>{parsed.food.label}</h5>
                            <h5>Calories: {parsed.food.nutrients.ENERC_KCAL}</h5>
                            <h5>Fat: {parsed.food.nutrients.FAT}</h5>
                            {/* {parsed.food.map((food, _food) => (
                                <div key={_food}>
                                    {food.nutrients.map((nutrients, _nothing) => (
                                        <div key={_nothing}>
                                            <label> Calories: </label>
                                            <p className='white'> {ENERC_KCAL} </p>
                                        </div>
                                    ))}
                                </div>
                            ))} */}
                        </div>
                    ))}

                </div>
            </div>}
        </div >
    )
}

export default Main