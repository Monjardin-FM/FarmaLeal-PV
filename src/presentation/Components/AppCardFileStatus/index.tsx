import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import clsx from "clsx";

type AppCardFileStatusProps = {
  picture: any;
  start?: () => void;
  end?: () => void;
  title: string;
  // styles: string;
  text: string;
};

export const AppCardFileStatus = ({
  picture,
  // styles,
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
      className={clsx(
        "w-full flex flex-col items-center content-center bg-black bg-opacity-25 border-dashed border-2 border-opacity-40 cursor-pointer border-gray-300  py-4 rounded-lg"
      )}
    >
      <Player
        src={picture}
        autoplay
        loop
        style={{
          width: "35%",
          // height: "45%",
        }}
      />
      <p className="mt-4 font-semibold text-gray-200">{title}</p>
      <p className="text-sm text-gray-300 mt-3">{text}</p>
    </div>
  );
};
