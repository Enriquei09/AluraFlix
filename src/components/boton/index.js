import styles from "./boton.module.css"

function Boton(props) {
    const className = props.texto === "LIMPIAR" ? styles.boton : styles.botonsegundo
    return(
        <button type="submit" className={`${className}`} >{props.texto}</button>
    )
}

export default Boton