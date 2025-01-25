// import styles from "./index.modules.css"
import Banner from "components/banner"
import Categoria from "components/Categoria"
import ModalEditVideo from "components/ModalEdit";
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
            {/* <ModalEditVideo/> */}
            
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