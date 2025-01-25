import CampoTexto from "components/Campo"
import styles from "./formulario.module.css"

import TextArea from "components/Campo/textArea"
// import Boton from "components/iconOptions"

function FormularioEstilizado(){
    return(
        <form className={styles.formContainer} >
            <CampoTexto titulo="Titulo" placeholder="Ingresa el titulo"/>
            <CampoTexto titulo="Categoria" placeholder="Selecciona la categoria"/>
            <CampoTexto titulo="Imagen" placeholder="Link de la imagen"/>
            <CampoTexto titulo="Video" placeholder="Link del video"/>
            <TextArea titulo="Descripción" placeholder="Descripción del video" />
            
        </form>
    )
}

export default FormularioEstilizado