import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person behind laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Avaliable for new Projects</div>
          </div>
       </div>
       <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">AI practitioner driving innovation in healthcare and beyond.</h1>
       <p className="mt-4 text-center text-white/60 md:text-lg">As a dedicated student in artificial intelligence, I specialize in medical AI while embracing the full spectrum of AI opportunities to create impactful, real-world solutions across industries.</p>
       <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My Work </span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Lets Connect</span>
        </button>
       </div>
      </div>
    </div>
  )
};
