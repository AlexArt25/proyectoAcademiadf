import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Formacion from './pages/Formacion';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import Acceder from './pages/Acceder';
import Empleo from "./pages/Empleo";
import InformacionCurso from './pages/InformacionCurso';
import Preinscripcion from './pages/Preinscripcion';
import MasInformacion from './pages/MasInformacion';
function App() {
  return (
    <Router>
      {/* El switch muestra la primera coincidencia con la url que se le especifica */}
      <Switch>
        <Route path="/inicio">
          <Inicio/>
        </Route>
        <Route path="/informacionCurso">
          <InformacionCurso/>
        </Route>
        <Route path="/formacion">
          <Formacion />
        </Route>
        <Route path="/empleo">
          <Empleo/>
        </Route>
        <Route path="/sobrenosotros">
          <SobreNosotros/>
        </Route>
        <Route path="/contacto">
          <Contacto/>
        </Route>
        <Route path="/acceder">
          <Acceder/>
        </Route>
        <Route path="/preinscripcion">
          <Preinscripcion/>
        </Route>
        <Route path="/masinformacion">
          <MasInformacion/>
        </Route>
        {/* Si no se encuentra la ruta especificada redirige a la pagina de inicio */}
        <Redirect to="/inicio"/>
      </Switch> 
    </Router>
  );
}

export default App;
