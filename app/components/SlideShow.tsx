// import React, { useEffect, useMemo, useRef, useState } from "react";

// type Props = {
//   message: string;
// };

// const SlideShow: React.FC<Props> = ({ message }) => {
//   const divRef = useRef<HTMLDivElement>(null);
//   const [position, setPosition] = useState<number>(0);

//   const messages = useMemo(() => {
//     // Create an array of 10 messages for smooth scrolling
//     return Array(10).fill(message);
//   }, [message]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prev) => (prev + 1) % messages.length);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [messages.length]);

//   useEffect(() => {
//     if (divRef.current) {
//       const width = divRef.current.children[0].clientWidth;
//       divRef.current.scrollTo({
//         left: width * position,
//         behavior: "smooth",
//       });
//     }
//   }, [position]);

//   return (
//     <div className="relative w-full overflow-hidden bg-orange-500 border-t-2 border-b-2 border-black">
//       <div
//         ref={divRef}
//         className="flex whitespace-nowrap"
//         style={{ width: `${messages.length * 100}%` }}
//       >
//         {messages.map((msg, id) => (
//           <div
//             key={id}
//             className="inline-block w-full text-white font-mono text-base md:text-xl p-2"
//           >
//             {String(msg)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SlideShow;

// components/InfiniteScrollMessage.tsx
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

type Props = {
  message: string | undefined;
};

const SlideShow: React.FC<Props> = (props) => {
  return (
    <Marquee className="p-4 bg-orange-500 font-mono text-xl md:text-2xl border-t-2 border-b-2 flex flex-row gap-4 border-black  shadow-lg font-bold text-white">
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
      <div className="ml-8">{props.message}</div>
    </Marquee>
  );
};

export default SlideShow;
