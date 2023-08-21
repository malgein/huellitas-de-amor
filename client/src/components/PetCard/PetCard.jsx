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
              <p className="uppercase font-bold text-lg">{nombre}</p>
            </Link>
            <small className="text-default-500">{edad} años</small>
            <small className="text-default-500">{peso} kg</small>
            <h4 className="font-bold text-large">{sexo}</h4>
          </div>
          <div className="relative top-1 ml-[132px]">
            <Button className=" hover:bg-orange-300" color="warning">
              Donar
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardBody className="overflow-visible py-2 flex flex-col items-center">
        {" "}
        {/* Centra el contenido vertical y horizontalmente */}
        <div className="aspect-w-3 aspect-h-4  flex items-center justify-center">
          {" "}
          {/* Centra la imagen */}
          {console.log(foto)}
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-[500px] h-[350px]"
            src={foto[0]}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default PetCard;
