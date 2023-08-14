import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
function PetCard({ nombre, edad, sexo, descripcion, foto }) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{nombre}</p>
        <small className="text-default-500">{edad} año</small>
        <h4 className="font-bold text-large">{sexo}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={foto}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
export default PetCard;
