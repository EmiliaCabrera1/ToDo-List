const BotonAgregar = ({ onClick }) => {
  return (
    <button
      className="min-w-[147px] col-span-1 flex flex-row mt-auto items-center justify-center gap-2 text-white text-2xl font-semibold font-['courier-prime'] h-[57px] bg-[#262827] rounded-[10px] shadow border border-black "
      onClick={onClick}
    >
      <img src="../assets/flecha-agregar.svg" alt="Icono" />
      Agregar
    </button>
  );
};

export default BotonAgregar;
