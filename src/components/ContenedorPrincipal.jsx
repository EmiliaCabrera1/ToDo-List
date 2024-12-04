import InputTarea from "./InputTarea";
import Select from "./Select";
import BotonAgregar from "./BotonAgregar";

const ContenedorPrincipal = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mx-20 mb-20 max-w-full">
      <InputTarea />
      <Select />
      <BotonAgregar />
    </div>
  );
};

export default ContenedorPrincipal;
