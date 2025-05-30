import InputTarea from "./InputTarea";
import Select from "./Select";

import { useState } from "react";
import ListaDeTareas from "./ListaDeTareas";
import { Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { color } from "framer-motion";

const ContenedorPrincipal = () => {
  const tareasEnLocalStorage = JSON.parse(
    localStorage.getItem("listaDeTareas") ?? "[]"
  );

  const [tareas, setTareas] = useState(tareasEnLocalStorage);
  const [filtro, setFiltro] = useState("todas");

  const [texto, setTexto] = useState("");

  const agregarTarea = () => {
    if (texto.length === 0) return;
    const tareaAAgregar = {
      id: Math.floor(Math.random() * 100000000000),
      tarea: texto,
      completa: false,
    };

    const tareasAGuardar = [...tareas, tareaAAgregar];

    localStorage.setItem("listaDeTareas", JSON.stringify(tareasAGuardar));
    setTareas(tareasAGuardar);
    setTexto("");
  };

  const eliminarTarea = (id) => {
    const tareasAGuardar = tareas.filter((tarea) => tarea.id !== id);
    localStorage.setItem("listaDeTareas", JSON.stringify(tareasAGuardar));
    setTareas(tareasAGuardar);
  };

  const completarTarea = (id) => {
    const tareaAEditar = tareas.filter((tarea) => tarea.id === id);
    tareaAEditar[0].completa = !tareaAEditar[0].completa;

    const tareasAGuardar = [
      ...tareas.filter((tarea) => tarea.id !== id),
      ...tareaAEditar,
    ];

    localStorage.setItem("listaDeTareas", JSON.stringify(tareasAGuardar));
    setTareas(tareasAGuardar);
  };

  return (
    <div className="sm:grid min-w-[250px] md:grid-cols-5 gap-8 mx-20 mb-20 max-w-full">
      <InputTarea texto={texto} setTexto={setTexto} />
      <Button
        leftIcon={<ChevronRightIcon w={8} h={8} />}
        background="black"
        color="white"
        size="lg"
        variant="solid"
        marginTop={10}
        rounded={"xl"}
        _hover
        onClick={agregarTarea}
      >
        Agregar
      </Button>
      <Select filtro={filtro} setFiltro={setFiltro} />
      <ListaDeTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        completarTarea={completarTarea}
        filtro={filtro}
      />
    </div>
  );
};

export default ContenedorPrincipal;
