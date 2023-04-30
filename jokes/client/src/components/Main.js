import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './styling.css';

const Main = () => {

    const [punchlinejokes, setPunchlineJokes] = useState(null)

    const handleSubmit = (e) => {
        console.log("test")
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://dad-jokes.p.rapidapi.com/random/joke/png',
            headers: {
                'X-RapidAPI-Key': '3349990788msh388664143710c09p138db8jsn1f85a7af5681',
                'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data)
            setPunchlineJokes(response.data)
        }).catch(err => {
            console.log(err.response.status)
            if (err.response.status === 404) {
                console.log("Mission Failed");
            }
        })
    }

    console.log(punchlinejokes && punchlinejokes.body)

    return (
        <div>
            <form className="d-flex p-5" role="search" onSubmit={(e) => handleSubmit(e)}>
                <div class="center">
                    <div class="outer button">
                        <button>Click For A Joke</button>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </form>

            {(punchlinejokes) && <div className="thejoke">
                <h3>Hover over the setup for the punchline:</h3>
                <div className='flip-card'>

                    <div className='grid-container flip-card-inner'>
                        <div className="flip-card-front">
                            <h4>{punchlinejokes.body.setup}</h4>
                        </div>
                        <div className='flip-card-back'>
                            <h4>{punchlinejokes.body.punchline}</h4>
                        </div>
                    </div>

                </div>
            </div>}

        </div>
    )
}

export default Main;