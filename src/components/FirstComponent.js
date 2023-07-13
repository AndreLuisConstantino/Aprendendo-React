import AnotherComponent from "./AnotherComponent"

function FirstComponent() {
    //Algum comentário
    const name = 'andré'

    return (
        <div className="firstcomponent">
            {/* Coemntário JSX*/}
            <p>Primeiro parágrafo</p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent