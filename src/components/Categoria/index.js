import Card from "components/card"
import styles from "./categoria.module.css"
// import videos from "data/db.json"

function Categoria({categoria, videos}){

    const colorcat = [...new Set(videos.map((video) => video.colorCategoria ))]
    
    return(
        <section className={styles.container}>
            <h2 className={styles.titulo} style={{ backgroundColor: colorcat }}>{categoria}</h2>
            <div className={styles.containerContent} >
                {
                    videos.map((video)=>{
                        
                        return(
                            <Card  key={video.id} video={video} />
                        )
                    })
                }
                
                
            </div>
        </section>
    )
}

export default Categoria