import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Pharmacy from "../../../assets/json/pharmacy.json";
import FarmaLealLogo from "../../../assets/img/farmaleal-logo.png";
export const AppHome = () => {
  return (
    <div className="flex justify-center items-center content-center w-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="w-4/5 p-10">
          <Player
            src={Pharmacy}
            autoplay
            loop
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg text-primary-300 font-semibold">
            Farma Leal PV
          </div>
          <div className="mt-5 flex items-center space-x-4 justify-center mb-5 ">
            <div className="text-center text-sm font-medium text-gray-500 mb-5">
              Desarrollado por
            </div>
            <div className="mb-5">
              <a href="https://www.farmaleal.com.mx/" target="__blank">
                <img
                  title="Farmaleal "
                  className="mx-auto w-16"
                  src={FarmaLealLogo}
                  alt="Farmaleal Logotype"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
