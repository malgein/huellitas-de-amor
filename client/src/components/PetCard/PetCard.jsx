import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import PathRoutes from "../../helpers/Routes.helper";
function PetCard({ nombre, edad, sexo, descripcion, foto, peso, id }) {

  

  return (
    <Card className="py-4 h-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex flex-row">
          <div>
            <Link to={PathRoutes.DETAIL.replace(":id", id)}>
              <p className="text-tiny uppercase font-bold">{nombre}</p>
            </Link>
            <small className="text-default-500">{edad} años</small>
            <small className="text-default-500">{peso} kg</small>
            <h4 className="font-bold text-large">{sexo}</h4>
          </div>
          <div className="ml-20">
            <Button color="primary">Donar</Button>
          </div>
        </div>
      </CardHeader>

      <CardBody className="overflow-visible py-2 flex flex-col items-center">
        {" "}
        {/* Centra el contenido vertical y horizontalmente */}
        <div className="aspect-w-3 aspect-h-4 w-full flex items-center justify-center">
          {" "}
          {/* Centra la imagen */}
          {/* {console.log(foto)} */}
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={foto[0]}
            width={300}
            height={400}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default PetCard;
