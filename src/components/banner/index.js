import styles from "./Banner.module.css"
import img from "./imgBanner.png"
import img2 from "./pensrProgrmador.png"


function Banner(){
    return(
        <div className={styles.banner} style={{backgroundImage:`url("${img}")`}} >
            <div style={{opacity:0.5}} ></div>
            <section className={styles.containerContent}>                
                <div className={styles.containerText}>
                    <h1 className={styles.titulocategory}>Front End</h1>
                    <div>
                        <span className={styles.videoTitulo}>Challenge React</span>
                        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                    </div>                    
                </div>
                <img src={img2} alt="img banner" />
            </section>
        </div>
    )
}

export default Banner