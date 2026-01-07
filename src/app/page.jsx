import Content from "@/components/ui/content";
import AboutContent from "@/content/about.mdx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faKaggle, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import BasicTimeline from "@/components/ui/basictimeline";
import ParentCard from "@/components/ui/parentcard";

export default function Home() {
    return (
        <>
            <div className='grid grid-cols-6 justify-items-center mt-16'>
                <div className='flex flex-col col-start-2 col-span-4 items-center gap-6 md:flex-row'>
                    <img className='max-w-2xs' src="/ece_img.png" alt="" />
                    <Content className={'content-center text-justify'}>
                        <AboutContent/>
                        <hr className='w-64 justify-self-center m-4'/>
                        <div className='flex gap-6 justify-center mt-4'>
                            <a href="https://github.com/Eceakinci" target="_blank">
                                <FontAwesomeIcon icon={faGithub} className='h-8 text-hover'/>
                            </a>
                            <a href="https://www.linkedin.com/in/ece-akinci/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className='h-8 text-hover'/>
                            </a>
                            <a href="https://stackoverflow.com/users/8767508/ece" target="_blank">
                                <FontAwesomeIcon icon={faStackOverflow} className='h-8 text-hover'/>
                            </a>
                            <a href="https://www.kaggle.com/eceakinci" target="_blank">
                                <FontAwesomeIcon icon={faKaggle} className='h-8 text-hover'/>
                            </a>
                        </div>
                    </Content>
                </div>
            </div>
            <BasicTimeline />
            <ParentCard />
        </>
    )
}