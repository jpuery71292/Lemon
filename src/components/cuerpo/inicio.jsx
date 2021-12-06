import './cuerpos.css'
import image from '../imagenes/Home.png'

function Home (){
    return(
        <div className="container-home">
            <img className="image" src={image} alt={image.name} />
        </div>
    )
}

export default Home
