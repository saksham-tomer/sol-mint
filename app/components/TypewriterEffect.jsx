import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterTitle = ({ props }) => {
  return (
    <div>
      <Typewriter
        options={{ loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Card Details.")
            .pauseFor(2000)
            .deleteAll()
            .typeString(props)
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterTitle;