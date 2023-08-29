import React from "react";
import { Link, Button, Image } from "@nextui-org/react";
import logoPrueba from "../../assets/LogoPrueba.jpg";
// import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className=" flex flex-col mb-0">
      <div className="flex flex-row  items-center gap-20 h-24">
        <div className="ml-20">
          <Link href="/">
            <Image
              width={90}
              height={90}
              alt="NextUI hero Image"
              // src="../../assets/LogoPrueba.jpg"
              src={logoPrueba}
            />
          </Link>

        </div>
        <div className="flex flex-row justify-center gap-20 ml-20 border-b-2">
          <section>
            <h4>Ubicación</h4>
            <p>Del mundo</p>
          </section>
          <section className="ml-20">
            <h4>Contacto</h4>
            <p>✉ Huellitasdemaor@gmail.com</p>
            <p>📞 16572345</p>
          </section>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center h-16 ">
        <div className="ml-4">©2023, All right reserved.</div>
        <div className="mr-4 flex flex-row  items-center  gap-4 ">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};
export default Footer;
