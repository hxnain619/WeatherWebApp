import React from 'react'

export const NotFound = () => {
    return <div className="container center not_found">
        <h1 className="center">404</h1>
        <p >Seems like you are not on earth.</p>
        <button className="back" onClick={() => window.location.pathname = '/'} >Go To Home</button>
    </div>
} 