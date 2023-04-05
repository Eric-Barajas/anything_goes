import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Main = () => {

    const [words, setWords] = useState(null)

    const handleSubmit = (e) => {
        console.log("test")
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
            headers: {
                'X-RapidAPI-Key': '3349990788msh388664143710c09p138db8jsn1f85a7af5681',
                'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com'
            }
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setWords(response.data)
        }).catch(err => {
            console.log(err.response.status)
            if (err.response.status === 404) {
                console.log("Mission Failed");
            }
        })
    }

    console.log(words && words.quizlist)

    return (
        <div className="app">
            <div>
                <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <input className="btn btn-outline-success" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Main