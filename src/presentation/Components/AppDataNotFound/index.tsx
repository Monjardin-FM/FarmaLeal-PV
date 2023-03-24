import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Astronaut from "../../../assets/json/astronaut.json";
import { AppHeading } from "../AppHeading";

export const DataNotFound = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <Player
        src={Astronaut}
        autoplay
        loop
        style={{ width: "100%", height: "100%" }}
      />
      <div>
        <AppHeading size="lg" className="text-danger-600">
          Recurso no encontrado
        </AppHeading>
        <span className="text-gray-600 font-semibold text-sm">
          No se encontraron coincidencias con la búsqueda
        </span>
      </div>
    </div>
  );
};
