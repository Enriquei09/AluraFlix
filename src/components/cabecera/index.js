import { Link } from "react-router-dom"
import styles from "./cabecera.module.css"
import logo from "./logoAlufaFlix.png"
import CabeceraLink from "components/cabeceraLink"

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix"/>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./" >
                    Home
                </CabeceraLink>
                <CabeceraLink url="/NuevoVideo"  >
                    Nuevo video
                </CabeceraLink>               

            </nav>

        </header>
    )
}

export default Cabecera