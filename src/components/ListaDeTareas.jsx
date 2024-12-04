import Tarea from "./Tarea";

const ListaDeTareas = ({ tareas, eliminarTarea, completarTarea, filtro }) => {
  return (
    <div className="col-span-4">
      {tareas.map((tarea) => {
        if (
          filtro === "todas" ||
          (filtro === "completas" && tarea.completa === true) ||
          (filtro === "incompletas" && tarea.completa === false)
        ) {
          return (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              tarea={tarea.tarea}
              completa={tarea.completa}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          );
        }
      })}
    </div>
  );
};

export default ListaDeTareas;
