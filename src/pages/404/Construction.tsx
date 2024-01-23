import React from "react";
import Construct from "../assets/images/44190-under-construction-1.gif";
import { Player } from "@lottiefiles/react-lottie-player";

function Construction() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
    <Player
            src="https://assets2.lottiefiles.com/private_files/lf30_y9czxcb9.json"
            className="player"
            loop
            autoplay
            // style={{ height: '250px', width: '250px' }}
          />
    </div>
  );
}

export default Construction;
