import { Link } from "react-router-dom"
import styles from "./cabeceraLink.module.css"

function CabeceraLink({url,children,}){

    const  className = children === "Home" ? styles.homeLink : styles.favoritosLink
    return(
        <Link to={url} className={`${styles.link} ${className}`}>
            {children}
        
        </Link>
    )
}

export default CabeceraLink