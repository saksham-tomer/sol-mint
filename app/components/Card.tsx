import React, { useState } from "react";
import { motion } from "framer-motion";
import TypewriterTitle from "./TypewriterEffect";
import question from "../../public/questionMark.png";

function Card({ data }) {
  const [draw, setDraw] = useState(false);

  return (
    <>
      {draw ? (
        <motion.div
          onClick={() => setDraw(false)}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1, x: [1000, 0] }}
          exit={{ x: [0, 1000] }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ rotateY: 800, x: [0, 1000] }}
          className="min-h-96 hover: relative border-8 border-yello-500 min-w-64 bg-gradient-to-r from-pink-200 to-green-200 flex flex-col items-center justify-center max-w-64 rounded-3xl shadow-xl shadow-black  bg-slate-200"
        >
          <p className="absolute z-20  bg-gradient-to-tl from-purple-500 to-orange-600 ring-2 ring-red-400 text-white px-2 rounded-2xl text-sm font-bold -translate-x-24 -translate-y-44">
            {data.name}
          </p>
          <div className="border  border-black rounded-xl max-w-44 shadow-xl">
            <img className="rounded-xl" src={data.image} alt="kitty" />
          </div>
          <div className="flex flex-col pt-4 items-center justify-center">
            <div className="bg-gradient-to-bl p-2 from-yellow-300 to-red-300 px-4 shadow-lg ring-2 ring-red-200 rounded-2xl">
              <h1 className=" font-semibold ">Description</h1>
            </div>
            <div className="pt-4 px-4 ">
              <p className=" ring-2 pr-2 pl-2 ring-yellow-400 rounded-lg bg-gradient-to-tr pb-4  from-green-100 to-cyan-200 text-wrap text-center text-lg font-semibold text-slate-900">
                <TypewriterTitle props={data.description} />
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          onClick={() => setDraw(!draw)}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1, x: [1000, 0] }}
          exit={{ x: [0, 1000] }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ rotateY: 800, x: [0, 1000] }}
          className="min-h-96 hover: relative border-8 border-orange-500 min-w-64 bg-gradient-to-r from-pink-200 to-green-200 flex flex-col items-center justify-center max-w-64 rounded-3xl shadow-xl shadow-black  bg-slate-200"
        >
          <img className="hover:animate-bounce" src={question} alt="question" />
        </motion.div>
      )}
    </>
  );
}

export default Card;
