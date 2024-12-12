import { useState } from "react"

export default function Joke(props) {

    const [isShown, setIsShown] = useState(false)

    function toggleShown() {
        setIsShown((prevState) => {
            return (
                !prevState
            )
        })
    }



    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {/* <p>Punchline: {props.punchline}</p> */}
            {isShown === true ? <p>Punchline: {props.punchline}</p> : ""}

            <button onClick={toggleShown}>Show Punchline</button>
            <hr />
        </div>
    )
}

