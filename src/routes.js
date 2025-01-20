import Cabecera from "components/cabecera";
import Footer from "components/pieDePagina";
import Inicio from "pages/inicio";
import NuevoVideo from "pages/nuevoVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Cabecera/>            
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/NuevoVideo" element={<NuevoVideo/>}/>             
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes