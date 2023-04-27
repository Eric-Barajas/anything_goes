import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Main = () => {

    const [dadjokes, setDadJokes] = useState(null)

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
            setDadJokes(response.data)
        }).catch(err => {
            console.log(err.response.status)
            if (err.response.status === 404) {
                console.log("Mission Failed");
            }
        })
    }

    console.log(dadjokes && dadjokes.body)

    return (
        <div>
            <form className="d-flex p-5" role="search" onSubmit={(e) => handleSubmit(e)}>
                <input className="btn btn-outline-success" type="submit" />
            </form>

            {(dadjokes) && <div className="joke">
                <div className='grid-container'>
                    {/* everytime you map will need a unique key */}
                    {/* {dadjokes.body.map((body, contentIndex) => (
                        <div key={contentIndex}>
                            <img src={body.image} alt="funny"></img>
                            <h5>{body.setup}</h5>
                        </div>
                    ))} */}

                </div>
            </div>}

        </div>
    )
}

export default Main;