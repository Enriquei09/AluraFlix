import Boton from "components/iconOptions"
import styles from "./cardVideos.module.css"


function Card({id, imgVideo, titulo}){
    return(
        <div className={styles.container}>
            <img src={imgVideo} alt={titulo} className={styles.img} />
            <div className={styles.botonContainer}>
                <Boton iconImg="img/iconEliminar.png" texto="BORRAR" />
                <Boton iconImg="img/iconEditar.png" texto="EDITAR" />
            </div>

        </div>
    )
}

export default Card