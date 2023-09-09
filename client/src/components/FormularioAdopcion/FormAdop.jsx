import React from "react";
import { Formik, Form, Field } from 'formik';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function App({isOpen, onClose, onConfirm}) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
  console.log('Rendering AdoptionFormModal', isOpen)

  const initialValues = {
    nombre: '',
    apellido: '',
    dni: '',
    mail: '',
    direccion: '',
    localidad: '',
    estado: '',
    pais: '',
    telefono: ''
  };

  const handleSubmit = (values) => {
    // ... envía la solicitud de adopción
    alert('Gracias por enviar tu solicitud, la estaremos analizando y te contactaremos a la brevedad');
    console.log(values);
    onConfirm(); // maneja la confirmación de la adopción
    onClose(); // cierra la modal
};


  return (
    <>
      {/* <Button onPress={onOpen}>Adoptar</Button> */}
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onClose={onClose}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Solicitud de adopción</ModalHeader>
              <ModalBody>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                  {() => (
                    <Form>
                      <div>
                        <label htmlFor="nombre">Nombre</label>
                        <Field name="nombre" required />
                      </div>
                      <div>
                        <label htmlFor="apellido">Apellido</label>
                        <Field name="apellido" required />
                      </div>
                      <div>
                        <label htmlFor="dni">DNI</label>
                        <Field name="dni" required />
                      </div>
                      <div>
                        <label htmlFor="mail">Mail</label>
                        <Field name="mail" type="email" required />
                      </div>
                      <div>
                        <label htmlFor="direccion">Dirección</label>
                        <Field name="direccion" required />
                      </div>
                      <div>
                        <label htmlFor="localidad">Localidad</label>
                        <Field name="localidad" required />
                      </div>
                      <div>
                        <label htmlFor="estado">Estado/Provincia</label>
                        <Field name="estado" required />
                      </div>
                      <div>
                        <label htmlFor="pais">País</label>
                        <Field name="pais" required />
                      </div>
                      <div>
                        <label htmlFor="telefono">Teléfono</label>
                        <Field name="telefono" required />
                      </div>
                      <Button type="submit" color="success" >Enviar solicitud</Button>
                    </Form>
                  )}
                </Formik>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
