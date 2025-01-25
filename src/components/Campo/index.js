import styles from "./campoTexto.module.css"

const CampoTexto = (props)=>{
    const {type ="text"} = props
    // const manejarCambio = (e) =>{
    //     props.actulizarValor(e.target.value)
    // }
    return(
        <div className={styles.campo}>
            <label className={styles.campolabel} >{props.titulo}</label>
            <input className={styles.campoInput}
                 placeholder={props.placeholder}
                 required
                 value={props.value}
                //  onChange={manejarCambio} 
                 type={type}/>
        </div>
    )
}



export default CampoTexto