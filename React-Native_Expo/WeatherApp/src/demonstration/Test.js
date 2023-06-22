/* eslint-disable prettier/prettier */
import React from 'react'

const Test = () => {
    let count = 0
    return (
        <div>
            <p>You clickrd {count} times</p>
            <button onClick={() => count++}> Click me</button>
        </div>
    )
}

export default Test
