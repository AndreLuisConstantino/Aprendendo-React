import acre from '../assets/acre.jpg'

const Images = () => {
    return (
        <div>
            {/* Imagem que estiver no public*/}
            <img src="/rio-acre.webp" alt="teste"/>
            <br />
            <br />
            <img src={acre} alt="aa"/>
        </div>
    )
}

export default Images