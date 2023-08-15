import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import PathRoutes from "../../helpers/Routes.helper";
function PetCard({ nombre, edad, sexo, descripcion, foto, peso, id }) {
  return (
    <Card className="py-4 h-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Link to={PathRoutes.DETAIL.replace(":id", id)}>
          <p className="text-tiny uppercase font-bold">{nombre}</p>
        </Link>
        <small className="text-default-500">{edad} años</small>
        <small className="text-default-500">{peso} kg</small>
        <h4 className="font-bold text-large">{sexo}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col items-center">
        {" "}
        {/* Centra el contenido vertical y horizontalmente */}
        <div className="aspect-w-3 aspect-h-4 w-full flex items-center justify-center">
          {" "}
          {/* Centra la imagen */}
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={foto}
            width={300}
            height={400}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default PetCard;
