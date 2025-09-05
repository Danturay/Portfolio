
import skinLesionWeb from "@/assets/images/skin_lesion_web2.png";
import laptop from "@/assets/images/software-laptop.png";
import portfolioWeb from "@/assets/images/portfolioWeb.png";
import tetricsImage from "@/assets/images/tetrics.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import GithubIcon from "@/assets/icons/github.svg"


const portfolioProjects = [
  {
    company: "University of Southampton",
    year: "2025",
    title: "Integrating High Density fNIRS with AI for Lie Detection",
    results: [
      { title: "Conducted participant trails to collect neurological primary data" },
      { title: "Developed CNN, LSTM, and hybrid AI models for deception detection" },
      { title: "Achieved accuracies of 82% LOPO-CV, 98% 5-fold-CV and awarded First Class Honours " },
    ],
    linkName: "Read More",
    link: "",
    readMoreLink: "https://github.com/danteturay/Portfolio",
    image: laptop,
  },
  {
    company: "Personal",
    year: "2025",
    title: "Fully Functional Skin Lesion Detection App Powered by AI",
    results: [
      { title: "Used a Next.js frontend with Tailwind CSS and a FastAPI Backend" },
      { title: "Uses can log in to track their lesions overtime" },
      { title: "Used Firebase Authentication and Firebase Storage" },
    ],
    linkName: "View Live Site",
    link: "",
    readMoreLink: "https://github.com/danteturay/skinLesionWebsite",
    image: skinLesionWeb,
  },
  {
    company: "Personal",
    year: "2025",
    title: "Portfolio Website",
    results: [
      { title: "Used Next.JS with Tailwind CSS to create an interactive portfolio" },
      { title: "Built modular React components to scale and reuse across sections" },
      { title: "Leveraged Framer Motion for smooth transitions and engaging interactions" },
    ],
    linkName: "View Live Site",
    link: "https://danteturay.vercel.app/",
    readMoreLink: "https://github.com/danteturay/Portfolio",
    image: portfolioWeb,
  },
  {
  company: "University of Southampton",
    year: "2023",
    title: "Tetrics",
    results: [
      { title: "Developed a Tetris-inspired puzzle game using JavaFX" },
      { title: "Integrated formal modeling and verification in Rodin to ensure correctness" },
      { title: "Designed interactive UI and implemented game logic including scoring, line clearing, and increasing difficulty" },
    ],
    linkName: "",
    link: "",
    readMoreLink: "https://github.com/danteturay/tetrics",
    image: tetricsImage
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 scroll-mt-20 lg:scroll-m-0 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader 
          eyebrow="Learning in Action"
          title="Featured Projects"
          description="A collection of experiments and projects demonstrating my skills and growth."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex)  => (

            <Card key={project.title} className="px-8 py-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-10 lg:px-20 sticky" style={{
              top: `calc(90px + ${projectIndex * 40}px)`
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16"> 
                  <div className="bg-gradient-to-r from-[#F3DFA7] to-[#C4A045] inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50 items-start">
                        <CheckIcon className="size-5 md:size-6 shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                    <div className="flex flex-row gap-4">
                      {(projectIndex !== 0 && projectIndex !== 3 && projectIndex !== 1)  && (
                        <a href={project.link}>
                          <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                            <span>{project.linkName}</span>
                            <ArrowUpRightIcon className="size-4" />
                          </button>
                        </a>
                       )}
      
                      <a href={project.readMoreLink}>
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                          <span>Read More</span>
                          <GithubIcon className="size-4" />
                        </button>
                      </a>
                  
                    </div>

                </div>
                <div>
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 rounded-3xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

};
