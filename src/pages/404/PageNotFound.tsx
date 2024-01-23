import React from "react";
import Construction from "./Construction";
import { Player } from "@lottiefiles/react-lottie-player";

function PageNotFound() {
  return (
    <div>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Player
          src="https://lottie.host/ee7996b5-caa2-4faf-a41b-86169aa9e027/DoustEplxS.json"
          className="player"
          loop
          autoplay
          // style={{ height: '250px', width: '250px' }}
        />
      </div>
    </div>
  );
}

export default PageNotFound;
