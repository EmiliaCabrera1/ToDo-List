import Titulo from "./components/Titulo";
import Fondo from "./components/Fondo";
import ContenedorPrincipal from "./components/ContenedorPrincipal";

const App = () => {
  return (
    <Fondo>
      <Titulo />
      <ContenedorPrincipal />
    </Fondo>
  );
};

export default App;
