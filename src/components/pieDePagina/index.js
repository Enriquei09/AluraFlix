import styles from "./footer.module.css"
import logo from "../cabecera/logoAlufaFlix.png"

function Footer(){
    return(
        <footer className={styles.pieDePagina}>
            <img src={logo}/>
        </footer>

    )
}

export default Footer