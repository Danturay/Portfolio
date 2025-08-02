import Image from "next/image";
import meTemp from "@/assets/images/meTemp.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";


export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-2" id="home">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={meTemp} alt="Person behind laptop" className="w-36 md:w-48"/>
       </div>
       <div className="flex justify-center mt-4">
  <div className="font-serif text-3xl md:text-4xl text-center tracking-wide flex flex-col md:flex-row items-center gap-2 md:gap-4">
  {/* Line 1: Student • AI Developer */}
  <div className="flex gap-3 md:gap-4">
    <span>Student</span>
    <span className="text-[#C4A045]">&bull;</span>
    <span>AI Developer</span>
  </div>
  <div className="flex gap-3 md:hidden">
    <span className="text-[#C4A045]">&bull;</span>
    <span>Researcher</span>
  </div>
  <div className="hidden md:flex gap-4">
    <span className="text-[#C4A045]">&bull;</span>
    <span>Researcher</span>
  </div>
</div>

</div>
       <p className="mt-4 text-center text-white/60 md:text-lg">As a dedicated student in artificial intelligence.</p>
       <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <a href="#projects">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
        </a>
        <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105">
          <span>👋</span>
          <span className="font-semibold">Lets Connect</span>
        </button>
       </div>
      </div>
    </section>
  )
};
