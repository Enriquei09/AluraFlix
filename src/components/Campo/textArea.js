import styles from "./campoTexto.module.css"

const TextArea = (props) =>{
    return(
        <div className={styles.campo}>
            <label className={styles.campolabel} > {props.titulo} </label>
            <textarea className={styles.campoInput}
                placeholder={props.placeholder}
                required
                value={props.value}
               //  onChange={manejarCambio} 
                type="textarea"
             />
        </div>
    )
}

export default TextArea