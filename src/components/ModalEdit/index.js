import FormularioEstilizado from "components/Formulario"
import styles from "./modalEdit.module.css"

function ModalEditVideo(){
    return(
        <>
            <div className={styles.Overlay} />
            <dialog className={styles.DialogEstilizado} >
                <article className={styles.containerForm}>
                    <button className={styles.BotonIcono} ><img src="/img/iconCerrar.png" alt="icono cerrar"/></button>
                    <h1>EDITAR CARD:</h1>
                    <FormularioEstilizado />
                </article>
                
                
            </dialog>
        
        </>
    )
}

export default ModalEditVideo