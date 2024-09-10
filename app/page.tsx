"use client";

import Image from "next/image";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import SlideShow from "./components/SlideShow";
import TokenShow from "./components/TokenShow";

/**
 * @author saksham-tomer
 * @name Page element
 * @copyright Copyrighted by mr. Ramot (c)
 * @returns Navbar component
 */

export default function Page() {
  return (
    <>
      <main className="min-h-screen mx-auto p-4">
        <Navbar />
        <section className="flex rounded-2xl shadow-2xl flex-col md:flex-row border-2 items-center bg-gray-100 relative p-4 lg:p-6 justify-between md:mx-8 lg:mx-24 mt-8 shadow-orange-300">
          <div className="font-mono text-pretty min-h-72 mb-8 md:mb-0 w-full md:w-1/2">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-mono block mb-2">
              Sell Your NFT to any
              <span className="bg-clip-text text-transparent bg-gradient-to-tr font-extrabold from-orange-200 to-orange-600 block mt-2">
                SPL
              </span>
            </span>

            <p className="font-semibold mt-4 font-mono text-slate-500 text-xs sm:text-sm">
              Connect your wallet and liquidate your nft to any spl token
            </p>
            <div className="flex flex-col sm:flex-row p-2 gap-4 mt-4 rounded-xl border max-w-96 border-black bg-orange-400">
              <section className="font-semibold p-1 text-sm flex items-center justify-between">
                <span>Tensor Marketplace Support</span>
                <Image
                  src={"/tensor.png"}
                  alt=""
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </section>
              <div className="hidden sm:block min-h-4 min-w-0.5 bg-black"></div>
              <section className="font-semibold text-sm p-1 flex items-center justify-between">
                <span>Jupiter Dex support</span>
                <Image
                  src={"/jupiter.png"}
                  alt=""
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </section>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <Image
              src={"/Ship.jpeg"}
              alt=""
              width={1920}
              height={1080}
              className="object-cover w-full rounded-3xl"
            />
          </div>
          <div className="rounded-3xl shadow-md max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] border-2 gap-4 w-full justify-between px-2 sm:px-4 md:px-6 lg:px-8 border-black p-2 flex flex-row bg-orange-500 font-mono absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="font-mono text-center">
              <p className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                1.5K
              </p>
              <p className="font-semibold text-xs sm:text-sm text-slate-200">
                collection
              </p>
            </div>
            <div className="font-mono text-center">
              <p className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                400K
              </p>
              <p className="font-semibold text-xs sm:text-sm text-slate-200">
                artworks
              </p>
            </div>
            <div className="font-mono text-center">
              <p className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                3.2K
              </p>
              <p className="font-semibold text-xs sm:text-sm text-slate-200">
                artists
              </p>
            </div>
          </div>
        </section>
        <Slider />
        <article className="flex flex-col items-center justify-center mt-20">
          <h1 className="font-mono font-extrabold text-3xl md:text-4xl lg:text-5xl">
            Fastest swaps and liquidaton on Solana
          </h1>
          <p className="font-semibold text-xs md:text-sm text-white mt-4 border-2 border-black shadow-lg shadow-orange-300 mb-20 p-2 px-4 bg-orange-400 rounded-3xl lg:text-base font-mono">
            Uses the power of Tensor marketplace and Jupiter&apos;s Dex features
            to provide you the best price for your NFT{" "}
          </p>
        </article>
      </main>
      <SlideShow message="Liquidate Now" />
      <div className="flex flex-row justify-between p-4 md:p-8 bg-orange-100 items-center">
        <div className="flex flex-col items-center justify-center mx-8 md:mx16 lg:mx-24">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl md:mb-2 lg:mb-4">
            Liquidate Your NFT Now
          </h2>
          <button className="px-2 py-1 md:px-4 md:py-2 rounded-3xl md:border-b-4 font-semibold md:text-2xl lg:text-4xl lg:px-8 lg:py-4 md:font-bold bg-orange-400 hover:cursor-pointer mt-2 md:mt-4 hover:bg-orange-500 border-b-2 border-black shadow-lg ">
            Liquidate
          </button>
        </div>
        <Image
          src={"/pikachu.gif"}
          alt=""
          width={1920}
          height={1080}
          className="object-cover max-w-52 w-1/2 rounded-3xl md:mr-8 lg:mr-28"
        />
      </div>
      <section className="border-b-2 border-t-2 border-black flex items-center justify-center">
        <p className=" font-bold text-lg md:text-xl p-2 lg:text-2xl">
          Get The Best Conversion Rate
        </p>
      </section>
      <TokenShow />
      {/*Slider component*/}
      <footer className="bg-gray-900 text-white font-mono">
        <Footer />
      </footer>
    </>
  );
}
