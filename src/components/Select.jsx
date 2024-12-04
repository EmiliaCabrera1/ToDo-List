const Select = () => {
  return (
    <div className="col-span-2">
      <label
        htmlFor="filtrar"
        className="font-['courier-prime'] text-xl font-medium"
      >
        Filtrar
      </label>
      <select className="input " id="filtrar" name="filtrar">
        Filtrar
        <option value="Todas">Todas</option>
        <option value="Todas">Completas</option>
        <option value="Todas">Incompletas</option>
      </select>
    </div>
  );
};

export default Select;
