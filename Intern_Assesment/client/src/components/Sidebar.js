import React from 'react'

const Sidebar = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div className='header'>
                <h1> AFILENAME </h1>
            </div>
            <div className='content' style={{ position: "absolute", bottom: 0 }}>
                <div>
                    <ol style={{ listStyleType: "none" }}>
                        <li> Legal </li>
                        <li> Terms of Service - Privacy - DMCA </li>
                        <li> Creator Terms </li>
                    </ol>
                </div>
                <div style={{ marginTop: "30px" }}>
                    <ol style={{ listStyleType: "none" }}>
                        <li> UI: 4.2023.15 </li>
                        <li> App: 4.2023.15 </li>
                        <li> Language: English (US) </li>
                    </ol>
                </div>
            </div>

        </div>
    )
}

export default Sidebar