import React from "react";
import {
  Link,
  Button,
  Image,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import logoPrueba from "../../assets/LogoPrueba.jpg";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "../Chatbot/Config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";

// import styles from "./footer.module.css";

const Footer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const latitude = -35.1673333;
  const longitude = -58.2400684;

  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="border-t-1 border-gray-300 pt-4 mt-12">
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
              <h4>
                <a href={googleMapsUrl} target="_blank">
                  Ubicación{" "}
                  <i className="fas fa-map-marker-alt hover:scale-110 transform transition-transform duration-300 ease-in-out text-red-300 hover:text-red-500"></i>
                </a>
                <br />
                en el mundo
              </h4>
            </section>

            <section className="ml-20">
              <h2>Contacto</h2>
              <p className=" hover:scale-105 transform transition-transform duration-300 ease-in-out">
                ✉{" "}
                <a href="mailto:Huellitasdemaor@gmail.com">
                  Huellitasdemaor@gmail.com
                </a>
              </p>
              <p className=" hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <a
                  href="https://wa.me/16572345"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  16572345 <i className="fab fa-whatsapp-square"></i>
                </a>
              </p>
            </section>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center h-16 ">
          <div className="ml-4">©2023, All right reserved.</div>
          <div className="mr-4 flex flex-row  items-center  gap-4 ">
            <Button
              onPress={onOpen}
              color="primary"
              className="bg-orange-400 text-orange hover:scale-105 transform transition-transform duration-300 ease-in-out"
            >
              Chabot
            </Button>

            <Modal
              isOpen={isOpen}
              backdrop={blur}
              onOpenChange={onOpenChange}
              placement="top"
              className="bg-orange-400"
            >
              <ModalContent>
                <div className="max-w-lg max-h-80vh mx-auto">
                  <Chatbot
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}
                    config={config}
                    headerText="HUELLITAS CHAT BOT"
                    placeholderText="Ingrese texto aqui"
                  />
                </div>
              </ModalContent>
            </Modal>

            <a
              className="hover:scale-110 transform transition-transform duration-300 ease-in-out"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square fa-lg"></i>
            </a>
            <a
              className="hover:scale-110 transform transition-transform duration-300 ease-in-out"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram-square fa-lg"></i>
            </a>
            <a
              className="hover:scale-110 transform transition-transform duration-300 ease-in-out"
              href="https://twitter.com/?lang=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
