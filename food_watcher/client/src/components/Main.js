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

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    console.log(foodinfo)

    return (
        <div className="app">
            <div>
                <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
                    <input className="form-control me-2" value={ingredient} type="search" placeholder="Search" aria-label="Search" />
                    <input className="btn btn-outline-success" type="submit" />
                </form>
            </div>

            {(ingredient && foodinfo) && <div className="ingr-area">

            </div>}
        </div>
    )
}

export default Main