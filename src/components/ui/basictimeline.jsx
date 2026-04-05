import React from 'react';

const experiences = [
    {
        title: "M.Sc. Artificial Intelligence ",
        company: "Brandenburg University of Technology",
        description: "● Gained knowledge in Bayesian models, Kalman/particle filters, causal inference, and generative models.\n" +
            "● Used Fourier transform/Fast Fourier Transform for neural signal and time-series analysis in practical applications.\n" +
            "● Applied data analysis and visualization techniques using Python, R and SQL.\n" +
            "● Worked on projects involving sentiment analysis, preference modeling, and decision systems.\n" +
            "● Strengthened foundation in mathematics: linear algebra, calculus, probability, statistics.\n",
        startDate: "Oct 2024",
        endDate: "Present",
        logo: "/logo/btu.jpg",
        logoAlt: "Brandenburg University of Technology"
    },
    {
        title: "Frontend Developer",
        company: "Feature/Mind Inc.",
        description: "● Developed responsive, mobile-first layouts and components, using jQuery, and SCSS/Sass.\n" +
            "● Converted Figma designs into interactive web components, which reduced page load times by 15% and improved user engagement.\n" +
            "● Enhanced accessibility across all e-commerce pages, ensuring 100% coverage and compliance.\n" +
            "● Participated in agile development using Jira, with all processes and code documented in Confluence.\n" +
            "● Handled Salesforce integrations and maintained version control with Git and BitBucket including CI/CD processes.",
        startDate: "Sep 2022",
        endDate: "Sep 2024",
        logo: "/logo/featuremind.png",
        logoAlt: "Feature/Mind"

    },
    {
        title: "Frontend Developer",
        company: "DePauli AG",
        description: "● Created RESTful API calls between old and new API endpoints to integrate them with the system using C# and .NET Core.\n" +
            "● Rewrote the company's product from .NET Core to Next.js and React.js.\n" +
            "● Maintained 7 e-commerce websites, using Git, Azure, and Jira to manage workflow and deployment.\n" +
            "● Translated 50+ Figma and Adobe XD design files into fully responsive and interactive user interfaces using Tailwind CSS, Bootstrap, SCSS/Sass, ensuring pixel-perfect accuracy and cross-browser compatibility.\n" +
            "● Performed bug fixing and end-to-end testing with Cypress.\n",
        startDate: "Oct 2021",
        endDate: "Aug 2022",
        logo: "/logo/depauli.svg",
        logoAlt: "DePauli AG"

    },
    {
        title: "Intern",
        company: "DePauli AG",
        description: "● Implemented new designs of 7 e-commerce websites and their static pages by using C#, .NET Core, jQuery, SCSS/Sass, Bootstrap, Jira, MS Azure, Git. ",
        startDate: "Jul 2021",
        endDate: "Sep 2021",
        logo: "/logo/depauli.svg",
        logoAlt: "DePauli AG"
    },
    {
        title: "Intern",
        company: "Akdeniz University \n\n BAUM",
        description: "● Developed a full-stack exam administration tool from the ground up with C#, .NET Core, JavaScript, CSS, and MySQL. ",
        startDate: "Aug 2020",
        endDate: "Sep 2020",
        logo: "/logo/akdeniz.png",
        logoAlt: "Akdeniz University"
    },
    {
        title: "B.Sc. Computer Engineering",
        company: "Akdeniz University",
        description: "",
        startDate: "Sep 2017",
        endDate: "Jan 2022",
        logo: "/logo/akdeniz.png",
        logoAlt: "Akdeniz University"
    }
];


const BasicTimeline= () => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-8 col-start-2">Experience</h2>
            <div className="md:grid md:grid-cols-7 items-center ">
                <div className="flex flex-col col-span-7 justify-center" id="timeline">
                    {experiences.map((exp, idx) => (
                        <div className="md:grid md:grid-cols-8 items-center mb-4 relative" key={idx}>
                            <div className="flex justify-between md:hidden">
                                <div className="col-span-2">
                                    <p className="text-sm font-semibold">{exp.title}</p>
                                    <p className="text-sm">{exp.company}</p>
                                </div>
                                <div className="col-span-1 text-center content-center h-full pr-4 text-sm text-gray-500 ">
                                    <p>{exp.startDate} - {exp.endDate}</p>
                                </div>
                            </div>
                            <div className="hidden md:block col-span-1 text-center content-center h-full border-r text-sm text-gray-500 ">
                                <p>{exp.endDate}</p>
                                <p>-</p>
                                <p>{exp.startDate}</p>
                            </div>
                            <div className="hidden h-full content-center border-b-1 border-gray-500 md:block col-span-2">
                                <div className="flex">
                                    {/*<img src={exp.logo} alt={exp.logoAlt} className="h-10 w-10 ml-2 rounded-lg shrink-0 object-contain"/>*/}
                                    <p className="text-sm ml-2 place-content-end">{exp.company}</p>
                                </div>
                                <p className="text-sm ml-2 font-semibold">{exp.title}</p>
                            </div>
                            <div className="mt-4 h-full pl-4 md:mt-0 col-span-5 whitespace-pre-line border-b-1 border-gray-500 ">
                                <p className="text-sm mb-3 md:mb-4" dangerouslySetInnerHTML={{ __html: exp.description }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default BasicTimeline;
