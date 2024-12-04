import {
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

const Tarea = ({ id, tarea, completa, eliminarTarea, completarTarea }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const botonEliminar = () => {
    eliminarTarea(id);
    onClose();
  };

  const botonCompletar = () => {
    completarTarea(id);
  };

  return (
    <div class="flex h-[57px] my-4">
      <div
        className={
          completa
            ? "flex py-3 pl-4 w-[90%] text-xl bg-[#f1f3f2] rounded-l-[10px] shadow border-l border-y border-black text-[#b8b3b3] line-through"
            : " flex py-3 pl-4 w-[90%] text-xl bg-[#f1f3f2] rounded-l-[10px] shadow border-l border-y border-black text-black"
        }
      >
        {tarea}
      </div>
      <button
        className={
          completa
            ? "flex items-center justify-center w-10 border-l border-t border-b border-black bg-[#b8b3b3]"
            : "flex items-center justify-center w-10 border-l border-t border-b border-black bg-[#86bc85]"
        }
        onClick={botonCompletar}
      >
        {" "}
        <img src="public/assets/check.svg" alt="Tilde" class="w-6 h-6" />{" "}
      </button>
      <button
        className="flex items-center justify-center w-10 rounded-tr-[10px] rounded-br-[10px] border border-black bg-[#b8b3b3]"
        onClick={onOpen}
      >
        {" "}
        <img src="public/assets/basurero.svg" alt="Basurero" class="w-6 h-6" />
      </button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Tarea
            </AlertDialogHeader>

            <AlertDialogBody>
              Estas segura/o de eliminar esta tarea?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={botonEliminar} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default Tarea;
