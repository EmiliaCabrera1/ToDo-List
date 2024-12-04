const InputTarea = () => {
  return (
    <div className="col-span-2">
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
        placeholder="Ingresar una tarea"
      />
    </div>
  );
};

export default InputTarea;
