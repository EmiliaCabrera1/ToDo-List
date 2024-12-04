import Titulo from "./components/Titulo";
import Fondo from "./components/Fondo";
import ContenedorPrincipal from "./components/ContenedorPrincipal";
import Tarea from "./components/Tarea";

const App = () => {
  return (
    <Fondo>
      <Titulo />
      <ContenedorPrincipal />
      <div className="flex h-[20%] mx-20  py-auto">
        <h3>Texto depende del filtro</h3>
      </div>
      <Tarea />
    </Fondo>
  );
};

export default App;
