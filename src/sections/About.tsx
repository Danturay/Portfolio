import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
   {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
   {
    title: 'CSS3',
    iconType: CssIcon,
  },
   {
    title: 'React',
    iconType: ReactIcon,
  },
   {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
   {
    title: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: "Muay Thai",
    emoji: "🥊",
    left: "5%",
    top: "5%"
  },
  {
    title: "Rugby",
    emoji: "🏉",
    left: "50%",
    top: "5%"
  },
  {
    title: "Rubik's Cube",
    emoji: "🧠",
    left: "10%",
    top: "35%"
  },
  {
    title: "Piano",
    emoji: "🎹",
    left: "35%",
    top: "45%"
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "65%",
    top: "25%"
  },
  {
    title: "Reaserch",
    emoji: "💻",
    left: "5%",
    top: "65%"
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "70% "
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me"
          title="Crafting Digital Experiences"
          description="I specialize in creating engaging, user-friendly websites that drive results and enhance brand presence."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8  md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="Education" description="Explore the grades i have achieved" />
              <div>
                <h4>University of Southampton</h4>
                <p>BSc Computer Science | 2:1 </p>
                <h4>Beths Grammer School</h4>
                <ul>
                  <li>Computer Science | A*</li>
                  <li>Maths | A*</li>
                  <li>Physics | A</li>
                </ul>
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Tools ive used throughout my journey" className="px-6 pt-6" />
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my intrests" className="px-6 py-6" />
              <div className="relative flex-1">
                {hobbies.map(hobby => (
                  <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{ left: hobby.left, top: hobby.top }}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] col-span-2 lg:col-span-1"> 
              <CardHeader title="Download CV" description="IDK what to put here" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  ) ;
};
