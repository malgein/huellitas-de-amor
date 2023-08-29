import React from "react";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import ModalLogSig from "../ModalLogSig/ModalLogSig";

export default function ButonModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Cuenta
      </Button>
      <Modal
        isOpen={isOpen}
        backdrop={blur}
        onOpenChange={onOpenChange}
        placement="bottom"
      >
        <ModalContent>
          <ModalLogSig />
        </ModalContent>
      </Modal>
    </>
  );
}

