import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import PathRoutes from "../../helpers/Routes.helper";
import Donar from "../BotonDonar/BotonDonar";

function PetCard({ nombre, edad, sexo, descripcion, foto, peso, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const size = "medium";

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Card className="py-4 h-full card border hover:scale-105 hover:shadow-md">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Link to={PathRoutes.DETAIL.replace(":id", id)}>
          <div className="flex flex-row">
            <div>
              <p className="uppercase font-bold text-lg">{nombre}</p>
              <small className="text-default-500">{edad} años</small>
              <br />
              <small className="text-default-500">{peso} kg</small>
              <h4 className="font-bold text-large">{sexo}</h4>
            </div>
          </div>
        </Link>

        <div className="ml-11 relative top-[-100px] left-14 bg-transparent">
          <Button
            onClick={handleOpen}
            // className="border border-orange-300  bg-transparent hover:bg-orange-200 mr-4 font-medium"
            className="border border-orange-300  bg-orange-300 hover:bg-orange-200 mr-4 "
          >
            {" "}
            Quiero Donar $
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col items-center">
        <Modal size={size} isOpen={isOpen} onClose={handleClose}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1 items-center font-bold text-xl text-orange-500">
              ¡Dona para hacer la diferencia!
            </ModalHeader>
            <ModalBody className="text-xl text-orange-500">
              <Donar />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={handleClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <CardBody className="overflow-visible py-2 flex flex-col items-center">
          <Link to={PathRoutes.DETAIL.replace(":id", id)}>
            <div className="aspect-w-3 aspect-h-4  flex items-center justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-[450px] h-[300px]"
                src={foto[0]}
              />
            </div>
          </Link>
        </CardBody>
      </CardBody>
    </Card>
  );
}

export default PetCard;
