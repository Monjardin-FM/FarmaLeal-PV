import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

type AppCardFileStatusProps = {
  picture: any;
  start?: () => void;
  end?: () => void;
  title: string;
  styles: string;
  text: string;
};

export const AppCardFileStatus = ({
  picture,
  styles,
  text,
  title,
  end,
  start,
}: AppCardFileStatusProps) => {
  return (
    <div
      draggable={true}
      onDragOverCapture={start}
      onDragLeaveCapture={end}
      className={styles}
    >
      <div className=" w-full flex flex-col justify-center items-center">
        <div className="w-44">
          <Player
            src={picture}
            autoplay
            loop
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <p className="mt-4 font-semibold text-gray-200">{title}</p>
        <p className="text-sm text-gray-300 mt-3">{text}</p>
      </div>
    </div>
  );
};
