import React from "react"
const Connected = (props) => {
    return (
        <div className="login-container">
            <h1 className="connected-message"> welcome to decentralised voting applications</h1>
            <p className="connected-account"> metamask account: {props.account}</p>
            <p className="connected-account"> remaining time: {props.remainingTime}</p>
            {props.showButton ? (
                <p className="connected-account"> you have already voted </p>
            ) : (
                <div>
                    <input
                        type="number"
                        placeholder="Enter candidate index"
                        value={props.number}
                        onChange={props.handleNumberChange}
                    ></input>
                    <br />
                    <button className="login-button" onClick={props.vote_function}>
                        vote
                    </button>
                </div>
            )}

            <table id="myTable" className="candidates-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Candidate name</th>
                        <th>Candidate votes</th>
                    </tr>
                </thead>
                <tbody>
                    {props.candidates.map((candidate, index) => (
                        <tr key={index}>
                            <td>{candidate.index + 1}</td>
                            <td>{candidate.name}</td>
                            <td>{candidate.vote_count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Connected
