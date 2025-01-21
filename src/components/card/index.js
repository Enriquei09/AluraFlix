import Boton from "components/iconOptions"
import styles from "./cardVideos.module.css"


function Card({video}){
    return(       
        <figure className={styles.container}>
            <img src={video.imgVideo} alt={video.titulo} className={styles.img} />
            <figcaption className={styles.botonContainer}>
                <Boton iconImg="img/iconEliminar.png" texto="BORRAR" />
                <Boton iconImg="img/iconEditar.png" texto="EDITAR" />
            </figcaption>
        </figure>        
    )
}

export default Card