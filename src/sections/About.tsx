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
    emoji: "🥊"
  },
  {
    title: "Rugby",
    emoji: "🏉"
  },
  {
    title: "Rubik's Cube",
    emoji: "🧠"
  },
  {
    title: "Piano",
    emoji: "🎹"
  },
  {
    title: "Basketball",
    emoji: "🏀"
  },
  {
    title: "Reaserch",
    emoji: "💻"
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me"
          title="Crafting Digital Experiences"
          description="I specialize in creating engaging, user-friendly websites that drive results and enhance brand presence."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
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
          <Card className="h-[320px] p-0">
            <CardHeader title="My Toolbox" description="Tools ive used throughout my journey" className="px-6 pt-6" />
            <ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
            <ToolboxItems toolboxItems={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>
          </Card>
          <Card>
            <CardHeader title="Beyond the Code" description="Explore my intrests" />
            <div>
              {hobbies.map(hobby => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader title="Download CV" description="IDK what to put here" />
          </Card>
        </div>
      </div>
    </div>
  ) ;
};
