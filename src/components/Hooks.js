import { useState, useEffect } from "react"

const Hooks = () => {
    const [novaIdade, setNovaIdade] = useState(40)

    useEffect(() => {
        console.log('teste')
    })

    const changeNewAge = () => {
        setNovaIdade(45)
    }

    return (
        <div>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova Idade</button>
        </div>
    )
}

export default Hooks