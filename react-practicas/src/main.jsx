import "./styles.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Constantes from './assets/components/1-constantes/constantes'
import Props from './assets/components/2-props/props'
import Usesstate from "./assets/components/3-useState/usesstate"
import IfTernario from "./assets/components/4-ifTernario/IfTernario"
import MapIfTernario from "./assets/components/5-map-ifternario/MapIfTernario"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="carpeta">
      <Constantes/>
      <Props titulo="Este titulo está hecho" subtitulo="con props"/>
      <Usesstate value={10}/>
      <IfTernario/>
      <MapIfTernario/>
    </div>
  </StrictMode>
)
