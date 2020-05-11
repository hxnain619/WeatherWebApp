import React from 'react'

export const Loader = () => {
    return <div className="card loading">
        <img src={require('../Assets/loader.gif')}  alt="" />
        <div className="center loading_text">Loading ... </div>
    </div>
} 