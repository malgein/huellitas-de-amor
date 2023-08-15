import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
function PetCard({ id, nombre, edad, sexo, descripcion, foto }) {
  return (
    <Link to={`mascotas/${id}`}>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{nombre}</p>
          <small className="text-default-500">
            {edad > 1 ? `${edad} años` : `${edad} año`}{" "}
          </small>
          <small className="text-default-500">{peso} kg</small>
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
    </Link>
  );
}
export default PetCard;
