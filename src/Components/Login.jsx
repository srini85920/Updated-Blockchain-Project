import React from "react"

export const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message"> Welcome to decentralised voting application</h1>
            <button className="login-button" onClick={props.connectWallet}>
                {" "}
                connect to metamask
            </button>
        </div>
    )
}

export default Login
