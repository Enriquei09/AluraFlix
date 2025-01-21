// import styles from "./index.modules.css"
import Banner from "components/banner"
import Categoria from "components/Categoria"
import data from "data/db.json";

function Inicio(){

    const categorias = [...new Set(data.map((video) => video.categoria,))]

    return(
        <>
            <Banner/>
            {
                categorias.map((categoria,index, colorCategoria)=>{
                    
                    return(
                        <Categoria key={index} categoria={categoria} colorCategoria={categoria.colorCategoria} videos={data.filter((video ) => video.categoria === categoria)} />
                    )
                })
            }
            
            {/* <section className={styles.container}>
                {
                    videos.map((video)=>{
                        return( <Categoria {...video} key={video.id} categoria={video.categoria} titulo={video.titulo} imgVideo={video.imgVideo}/>)
                    })
                }
            </section> */}
            
        </>
    )
}

export default Inicio