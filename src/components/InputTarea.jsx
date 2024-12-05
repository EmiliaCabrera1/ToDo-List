const InputTarea = ({ texto, setTexto }) => {
  return (
    <div className="w-[100%] sm:col-span-3">
      <label
        htmlFor="tarea"
        className="font-['courier-prime'] text-xl font-medium"
      >
        Tarea
      </label>
      <input
        className="input"
        type="text"
        id="tarea"
        name="tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Ingresar una tarea"
      />
    </div>
  );
};

export default InputTarea;
