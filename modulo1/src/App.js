import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Atividade1 from './Atividade1'
import Atividade2 from './Atividade2'
import Atividade3 from './Atividade3'
import Atividade4 from './Atividade4'
import Atividade5 from './Atividade5'
import Atividade6 from './Atividade6'
import Atividade7 from './Atividade7'
import Atividade8 from './Atividade8'
import Atividade9 from './Atividade9'
import Slides from './Slides'
import Pagina404 from './Pagina404'

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="atividade1" element={<Atividade1 />} />
                <Route path="atividade2" element={<Atividade2 />} />
                <Route path="atividade3/" element={<Atividade3 />} />
                <Route path="atividade3/:nome" element={<Atividade3 />} />
                <Route path="atividade4" element={<Atividade4 />} />
                <Route path="atividade5" element={<Atividade5 />} />
                <Route path="atividade6" element={<Atividade6 />} />
                <Route path="atividade7" element={<Atividade7 />} />
                <Route path="atividade8" element={<Atividade8 />} />
                <Route path="atividade9" element={<Atividade9 />} />
                <Route path="slidesModelo" element={<Slides />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App