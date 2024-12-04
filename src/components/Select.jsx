const Select = ({ filtro, setFiltro }) => {
  return (
    <div className="col-span-4">
      <label
        htmlFor="filtrar"
        className="font-['courier-prime'] text-xl font-medium"
      >
        Filtrar
      </label>
      <select
        className="input"
        id="filtrar"
        name="filtrar"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        Filtrar
        <option value="todas">Todas</option>
        <option value="completas">Completas</option>
        <option value="incompletas">Incompletas</option>
      </select>
    </div>
  );
};

export default Select;
