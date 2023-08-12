import React from "react";
import { Button, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { Badge } from "@nextui-org/react";

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({});
  };

  return (
    <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Adóptame
    </Button>
  );
};

export default function Detail() {
  return (
    <div className="flex flex-col items-center">
      <Image
        width={800}
        height={200}
        alt="NextUI hero Image"
        src="https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
      />
      <Badge content="En Adopcion" color="success" size="lx"></Badge>
      <div className="margin p-3">
        <CustomButton />
      </div>
    </div>
  );
}
