const AnotherComponent = () => {
    const handleClick = () => {
        alert('teste')
    }

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento de clique</button>
            <br />
            <br />
            <button onClick={() => alert('teste2')}>Evento no Elemento</button>
        </div>
    )
}

export default AnotherComponent;