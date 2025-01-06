import Titulo from "./components/Titulo";
import ContenedorPrincipal from "./components/ContenedorPrincipal";

const App = () => {
  return (
    <div className="bg-fondo bg-no-repeat bg-cover min-h-svh max-w-full">
      <Titulo />
      <ContenedorPrincipal />
    </div>
  );
};

export default App;
