import styles from "./OpcionIconos.module.css"


function Boton({iconImg,texto}){
    return(
        <button className={styles.Boton}>
            <img src={iconImg} className={styles.icono} />
            {texto}
        </button>
    )
}
export default Boton
