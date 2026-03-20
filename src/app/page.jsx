import Content from "@/components/ui/content";
import AboutContent from "@/content/about.mdx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faKaggle, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import BasicTimeline from "@/components/ui/basictimeline";
import Projects from "@/components/ui/projects";
import TechStack from "@/components/ui/techstack";

export default function Home() {
    return (
        <>
            <div className='grid grid-cols-7 justify-items-center mt-16'>
                <div className='flex flex-col col-start-1 col-span-7 items-center gap-6 md:flex-row'>
                    <img className='max-w-2xs self-start' src="/ece_img.png" alt="" />
                    <Content className={'content-center text-justify'}>
                        <h1>Ece Akinci</h1>
                        <h2 className="text-sm">Data Science Newbie | Former Frontend Developer</h2>
                        <p className="text-sm text-stone-600 mb-4">Cottbus, Germany</p>
                        <AboutContent/>
                        <hr className='w-64 justify-self-center m-4'/>
                        <div className='flex gap-6 justify-center mt-4'>
                            <a href="https://github.com/Eceakinci" target="_blank">
                                <FontAwesomeIcon icon={faGithub} className='h-8 hover:transition duration-300'/>
                            </a>
                            <a href="https://www.linkedin.com/in/ece-akinci/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className='h-8 hover:text-blue-500 transition duration-300'/>
                            </a>
                            <a href="https://stackoverflow.com/users/8767508/ece" target="_blank">
                                <FontAwesomeIcon icon={faStackOverflow} className='h-8 hover:text-orange-500 transition duration-300'/>
                            </a>
                            <a href="https://www.kaggle.com/eceakinci" target="_blank">
                                <FontAwesomeIcon icon={faKaggle} className='h-8 hover:text-teal-500 transition duration-300'/>
                            </a>
                        </div>
                    </Content>
                </div>
            </div>
            <TechStack />
            <Projects />
            <BasicTimeline />
        </>
    )
}