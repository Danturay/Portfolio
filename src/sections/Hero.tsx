import Image from "next/image";
import meTemp from "@/assets/images/meTemp.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";


export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60" id="home">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={meTemp} width={250} height={250} alt="Person behind laptop" />
       </div>
       <div className="flex justify-center mt-8">
  <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide inline-flex gap-4">
    <span>Student</span>
    <span className="text-[#C4A045]">&bull;</span>
    <span>AI Developer</span>
    <span className="text-[#C4A045]">&bull;</span>
    <span>Researcher</span>
  </h1>
</div>
       <p className="mt-4 text-center text-white/60 md:text-lg">As a dedicated student in artificial intelligence, I specialize in medical AI while embracing the full spectrum of AI opportunities to create impactful, real-world solutions across industries.</p>
       <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <a href="#projects">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work </span>
            <ArrowDown className="size-4" />
          </button>
        </a>
        <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Lets Connect</span>
        </button>
       </div>
      </div>
    </section>
  )
};
